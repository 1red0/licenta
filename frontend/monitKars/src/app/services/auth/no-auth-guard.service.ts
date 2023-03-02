import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAdminService } from './auth-admin.service';
import { AuthDriverService } from './auth-driver.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class NoAuthGuardService implements CanActivate{

  constructor(private authDriver: AuthDriverService, private authAdmin: AuthAdminService, private router: Router) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authAdmin.IsAuthenticated()){
      this.router.navigate(['']);
      return false;
    }else if(this.authDriver.IsAuthenticated()){
      this.router.navigate(['/']);
      return false;
    }else{
      return true;
    }
  }
  
}
