import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { navbarData } from 'src/app/components/sidenav/data/nav-data-admin';
import { navbarDataDriver } from 'src/app/components/sidenav/data/nav-data-driver';
import { navbarDataStart } from 'src/app/components/sidenav/data/nav-data-start';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override router: Router,
    protected keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    const requiredRoles = route.data.roles;

    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    return requiredRoles.every((role) => this.roles.includes(role));
  }
}
