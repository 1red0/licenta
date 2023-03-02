import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { CarComponent } from './components/car/car.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { LoginComponent } from './components/login/login.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { NoAuthGuardService } from './services/auth/no-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'account',
    component: AccountComponent, 
    canActivate: [AuthGuardService]
  },
  {
    path: 'car',
    component: CarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'carlist',
    component: CarlistComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'adduser',
    component: AdduserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'drivers',
    component: DriversComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'organisation',
    component: OrganisationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'addcar',
    component: AddcarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [NoAuthGuardService]
  },
  {
    path: 'welcome',
    component: StartPageComponent,
    canActivate: [NoAuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
