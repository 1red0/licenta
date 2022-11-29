import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountComponent } from './modules/account/account.component';
import { CarComponent } from './modules/car/car.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { PostsComponent } from './modules/posts/posts.component';
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
      component: LoginComponent
    }, {
      path: 'car',
      component: CarComponent
    }
    
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
