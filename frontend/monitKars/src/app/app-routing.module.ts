import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { CarComponentAdmin } from './components/admin/carAdmin/carAdmin.component';
import { CarlistComponentAdmin } from './components/admin/carlistAdmin/carlistAdmin.component';
import { CarlistComponentDriver } from './components/driver/carlistDriver/carlistDriver.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CarComponentDriver } from './components/driver/carDriver/carDriver.component';
import { DriversComponent } from './components/admin/drivers/drivers.component';
import { EditcarComponentAdmin } from './components/admin/editcarAdmin/editcarAdmin.component';
import { EditcarComponentDriver } from './components/driver/editcarDriver/editcarDriver.component';
import { HomepageComponent } from './components/commons/homepage/homepage.component';
import { OrganisationComponent } from './components/admin/organisation/organisation.component';
import { SettingsComponent } from './components/commons/settings/settings.component';
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
    component: CarComponentAdmin,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'carDriver',
    component: CarComponentDriver,
    canActivate: [AuthGuard],
    data: { roles: ['driver'] },
  },
  {
    path: 'carlist',
    component: CarlistComponentAdmin,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'carlistDriver',
    component: CarlistComponentDriver,
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
    component: EditcarComponentAdmin,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'editCarDriver',
    component: EditcarComponentDriver,
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
