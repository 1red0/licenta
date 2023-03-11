import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
  constructor(private router: Router) {}

  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  goToAccess(): void {
    this.router.navigateByUrl('/login');
  }
}
