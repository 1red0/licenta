import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './components/addcar/addcar.component';
import { CarComponent } from './components/car/car.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { CarlistdriverComponent } from './components/carlistdriver/carlistdriver.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriverCarComponent } from './components/driver-car/driver-car.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { EditcarComponent } from './components/editcar/editcar.component';
import { EditcardriverComponent } from './components/editcardriver/editcardriver.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './services/auth/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'car',
    component: CarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'driverCar',
    component: DriverCarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['driver'] },
  },
  {
    path: 'carlist',
    component: CarlistComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'drivercarlist',
    component: CarlistdriverComponent,
    canActivate: [AuthGuard],
    data: { roles: ['driver'] },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] },
  },
  {
    path: 'editCar',
    component: EditcarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'driverEditCar',
    component: EditcardriverComponent,
    canActivate: [AuthGuard],
    data: { roles: ['driver'] },
  },
  {
    path: 'drivers',
    component: DriversComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'organisation',
    component: OrganisationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'addcar',
    component: AddcarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
