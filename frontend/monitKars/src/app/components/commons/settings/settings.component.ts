import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  constructor(private kcService: AuthGuardService) {}

  goToProfile() {
    this.kcService.redirectToProfile();
  }

  logout() {
    this.kcService.logout();
  }
}
