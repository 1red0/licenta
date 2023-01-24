import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AccountComponent } from './components/account/account.component';
import { CarComponent } from './components/car/car.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { NgChartsModule } from 'ng2-charts';
import { MilagechartComponent } from './charts/milagechart/milagechart.component';
import { MaintenancechartComponent } from './charts/maintenancechart/maintenancechart.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgToggleModule } from 'ng-toggle-button';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { VignetteComponent } from './components/vignette/vignette.component';
import { InspectionComponent } from './components/inspection/inspection.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    AccountComponent,
    CarComponent,
    CarlistComponent,
    MilagechartComponent,
    MaintenancechartComponent,
    SettingsComponent,
    MaintenanceComponent,
    VignetteComponent,
    InspectionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    NgToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
