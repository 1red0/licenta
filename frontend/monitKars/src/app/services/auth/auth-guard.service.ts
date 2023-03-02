import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAdminService } from './auth-admin.service';
import { AuthDriverService } from './auth-driver.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authDriver: AuthDriverService, private authAdmin: AuthAdminService, private router: Router) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authAdmin.IsAuthenticated()){
      return true;
    }else if(this.authDriver.IsAuthenticated()){
      return true;
    }else{
      this.router.navigate(['welcome']);
      return false;
    }
  }
  
}
