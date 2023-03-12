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
import { NgChartsModule } from 'ng2-charts';
import { MilagechartComponent } from './charts/milagechart/milagechart.component';
import { MaintenancechartComponent } from './charts/maintenancechart/maintenancechart.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgToggleModule } from 'ng-toggle-button';
import { VignetteComponent } from './components/vignette/vignette.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { OrganisationService } from './services/organisations/organisation.service';
import { initializeKeycloak } from './services/auth/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './services/auth/auth-guard.guard';
import { EditcarComponent } from './components/editcar/editcar.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CarComponent,
    CarlistComponent,
    MilagechartComponent,
    MaintenancechartComponent,
    SettingsComponent,
    VignetteComponent,
    DriversComponent,
    StartPageComponent,
    OrganisationComponent,
    AddcarComponent,
    EditcarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    NgToggleModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuardService,
    SidenavComponent,
    OrganisationService,
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
