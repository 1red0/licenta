import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  roleAdmin: boolean = false;
  roleDriver: boolean = false;
  
  constructor(public kc: KeycloakService ) {
  this.roleAdmin=kc.isUserInRole("admin");
  this.roleDriver=kc.isUserInRole("driver"); }

}
