import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarComponent } from './components/car/car.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { initializeKeycloak } from './services/auth/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './services/auth/auth-guard.guard';
import { EditcarComponent } from './components/editcar/editcar.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { ChartComponent } from './charts/manufacturers/chart-manufacturers.component';
import { CarlistdriverComponent } from './components/carlistdriver/carlistdriver.component';
import { EditcardriverComponent } from './components/editcardriver/editcardriver.component';
import { DriverCarComponent } from './components/driver-car/driver-car.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ChartFreeCarsComponent } from './charts/chart-free-cars/chart-free-cars.component';
import { ChartStatusesComponent } from './charts/chart-statuses/chart-statuses.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CarComponent,
    CarlistComponent,
    SettingsComponent,
    DriversComponent,
    OrganisationComponent,
    AddcarComponent,
    EditcarComponent,
    ChartComponent,
    CarlistdriverComponent,
    EditcardriverComponent,
    DriverCarComponent,
    HomepageComponent,
    ChartFreeCarsComponent,
    ChartStatusesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [
    AuthGuardService,
    SidenavComponent,
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
