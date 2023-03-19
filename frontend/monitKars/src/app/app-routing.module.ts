import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './components/addcar/addcar.component';
import { CarComponent } from './components/car/car.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { EditcarComponent } from './components/editcar/editcar.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './services/auth/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] },
  },
  {
    path: 'car',
    component: CarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] },
  },
  {
    path: 'carlist',
    component: CarlistComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
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
    data: { roles: ['user'] },
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
