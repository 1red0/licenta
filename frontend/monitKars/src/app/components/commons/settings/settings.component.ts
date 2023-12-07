import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  constructor(private kcService: AuthGuardService) { }

  user;
  role: string;
  organisation: string;

  ngOnInit(): void {
    this.user = this.kcService.getLoggedUser();
    this.role = this.kcService
      .getRoles()
      .find((e) => e === 'admin' || e === 'driver');
    if (this.role === 'driver') {
      this.role = 'șofer';
    }

    this.organisation = environment.orgName;
  }

  goToProfile() {
    this.kcService.redirectToProfile();
  }

  logout() {
    this.kcService.logout();
  }
}
