import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { 
    path: '', 
    title: 'monitKars', 
    
    children: [{
      path: '',
      component: DashboardComponent
      
    },
     {
      path: 'settings',
      component: SettingsComponent
      
    }, {
      path: 'account',
      component: ProfileComponent
      
    },
    {
      path: 'search',
      component: SearchComponent
      
    }, 
    // {
    //   path: 'login', 
      
      
    // },
     {
      path: 'car',
      component: CarComponent
    },
    //  {
    //   path: 'logout',
      
    // },
     {
      path: 'register',
      component: RegisterComponent
    },
    
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
