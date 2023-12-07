import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { navbarDataDriver } from './data/nav-data-driver';
import { navbarData } from './data/nav-data-admin';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {
  constructor(private navbarService: NavbarService) { }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;

  navData: any;

  ngOnInit(): void {
    if (this.navbarService.roleAdmin) {
      this.navData = navbarData;
    } else {
      this.navData = navbarDataDriver;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
