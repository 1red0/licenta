import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { navbarDataStart } from './data/nav-data-start';
import { AuthAdminService } from 'src/app/services/auth/auth-admin.service';
import { AuthDriverService } from 'src/app/services/auth/auth-driver.service';
import { navbarDataDriver } from './data/nav-data-driver';
import { navbarData } from './data/nav-data-admin';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private authDriver: AuthDriverService, private authAdmin: AuthAdminService) { 

  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;

  navData = navbarDataStart;

  ngOnInit(): void{
    this.screenWidth = window.innerWidth;
    if(this.authAdmin.IsAuthenticated()){
      this.navData = navbarData;
    }else if(this.authDriver.IsAuthenticated()){
      this.navData = navbarDataDriver;
    }else{
      this.navData = navbarDataStart;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
