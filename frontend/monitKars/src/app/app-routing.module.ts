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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'carlist',
    component: CarlistComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adduser',
    component: AdduserComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'drivers',
    component: DriversComponent
  },
  {
    path: 'welcome',
    component: StartPageComponent
  },
  {
    path: 'organisation',
    component: OrganisationComponent
  },
  {
    path: 'addcar',
    component: AddcarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
