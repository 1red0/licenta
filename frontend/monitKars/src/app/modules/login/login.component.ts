import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  registerUserRequest: User = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  };

  constructor (private userService: UsersService, private router: Router) {  }

  registerUser() {
    this.userService.register(this.registerUserRequest).subscribe({
      next: (user) => {
        this.router.navigate(['/']);
      }
    })
  }

}
