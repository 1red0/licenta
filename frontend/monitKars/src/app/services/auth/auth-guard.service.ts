import { Injectable } from '@angular/core';
import {  KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService{

  constructor(private keycloakservice: KeycloakService) {
  }

  public getLoggedUser(): KeycloakTokenParsed | undefined {
    try {
      const userDetails: KeycloakTokenParsed | undefined = this.keycloakservice.getKeycloakInstance().idTokenParsed;
      return userDetails;
    } catch (e) {
      console.error("Exception, e");
      return undefined;
    }
  }

  public isLoggedIn() : Promise<boolean> {
    return this.keycloakservice.isLoggedIn();
  }

  public loadUserProfile() : Promise<KeycloakProfile> {
    return this.keycloakservice.loadUserProfile();
  }

  public login() : void {
    this.keycloakservice.login();
  }

  public logout() : void {
    this.keycloakservice.logout(window.location.origin);
  }

  public redirectToProfile() : void {
    this.keycloakservice.getKeycloakInstance().accountManagement();
  }

  public getRoles() : string[] {
    return this.keycloakservice.getUserRoles();
  }

  public testRole(role:string) : boolean{
    return this.keycloakservice.isUserInRole(role);
  }


  }
  
