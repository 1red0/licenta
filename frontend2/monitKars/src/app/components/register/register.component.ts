import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user-service.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = new User();
  isPasswordVisible: boolean = false;
  isPasswordConfirmationVisible: boolean = false;

  constructor(private userService: UserService) { }

  onSubmit(): void {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(this.user.password, salt);
    this.user.password = hashedPassword;
    if(this.user.password != this.user.passwordConfirmation){
      this.userService.addUser(this.user);
    } else {
      this.incorrectPassword();
    }
  }

  public incorrectPassword(): void {
    alert("Passwords did not match");
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  togglePasswordConfirmationVisibility(): void {
    this.isPasswordConfirmationVisible = !this.isPasswordConfirmationVisible;
  }

}
