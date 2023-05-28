import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/commons/body/body.component';
import { SidenavComponent } from './components/commons/sidenav/sidenav.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarComponentAdmin } from './components/admin/carAdmin/carAdmin.component';
import { CarlistComponentAdmin } from './components/admin/carlistAdmin/carlistAdmin.component';
import { SettingsComponent } from './components/commons/settings/settings.component';
import { DriversComponent } from './components/admin/drivers/drivers.component';
import { OrganisationComponent } from './components/admin/organisation/organisation.component';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { initializeKeycloak } from './services/auth/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './services/auth/auth-guard.guard';
import { EditcarComponentAdmin } from './components/admin/editcarAdmin/editcarAdmin.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { ChartComponent } from './charts/chart-manufacturers/chart-manufacturers.component';
import { CarlistComponentDriver } from './components/driver/carlistDriver/carlistDriver.component';
import { EditcarComponentDriver } from './components/driver/editcarDriver/editcarDriver.component';
import { CarComponentDriver } from './components/driver/carDriver/carDriver.component';
import { HomepageComponent } from './components/commons/homepage/homepage.component';
import { ChartFreeCarsComponent } from './charts/chart-free-cars/chart-free-cars.component';
import { ChartStatusesComponent } from './charts/chart-statuses/chart-statuses.component';
import { ChartMilageComponent } from './charts/chart-milage/chart-milage.component';
import { ChartInsuranceComponent } from './charts/chart-insurance/chart-insurance.component';
import { ChartInspectionComponent } from './charts/chart-inspection/chart-inspection.component';
import { ChartVignetteComponent } from './charts/chart-vignette/chart-vignette.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CarComponentAdmin,
    CarlistComponentAdmin,
    SettingsComponent,
    DriversComponent,
    OrganisationComponent,
    AddcarComponent,
    EditcarComponentAdmin,
    ChartComponent,
    CarlistComponentDriver,
    EditcarComponentDriver,
    CarComponentDriver,
    HomepageComponent,
    ChartFreeCarsComponent,
    ChartStatusesComponent,
    ChartMilageComponent,
    ChartInsuranceComponent,
    ChartInspectionComponent,
    ChartVignetteComponent,
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
