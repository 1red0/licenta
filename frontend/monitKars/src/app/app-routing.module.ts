import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountComponent } from './modules/account/account.component';
import { CarComponent } from './modules/car/car.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RegisterComponent } from './modules/register/register.component';
import { SearchComponent } from './modules/search/search.component';
import { SettingsComponent } from './modules/settings/settings.component';

const routes: Routes = [
  { 
    path: '', 
    title: 'monitKars', 
    component: DefaultComponent, 
    children: [{
      path: '', 
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }, {
      path: 'settings',
      component: SettingsComponent
    }, {
      path: 'account',
      component: AccountComponent
    }, {
      path: 'search',
      component: SearchComponent
    }, {
      path: 'login', 
      component: RegisterComponent
    }, {
      path: 'car',
      component: CarComponent
    }, {
      path: 'logout',
      component: RegisterComponent
    }, {
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
