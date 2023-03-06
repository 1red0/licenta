import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { navbarDataStart } from './data/nav-data-start';
import { navbarDataDriver } from './data/nav-data-driver';
import { navbarData } from './data/nav-data-admin';
import { ActivatedRoute} from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

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

  // constructor(route: ActivatedRoute){
  //   let snapshot = route.snapshot;
  //   console.log(snapshot.data);
  //   if(snapshot.data.roles?.includes("admin")){
  //     this.navData = navbarData;
  //   }else if(snapshot.data.roles?.includes("driver")){
  //     this.navData = navbarDataDriver;
  //   }else{
  //     this.navData = navbarDataStart;
  //   }
  // }
  controlere: any;
  constructor(private service1: NavbarService){

  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;

  navData = navbarDataStart;

  ngOnInit(): void{
    // this.controlere = this.service1.getRole(this.service1.getToken());
    // console.log(this.service1.getRole(this.service1.getToken()));
    console.log(this.service1.getToken());
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
