import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user: User = new User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    // replace with the current user id
    const id = 1;
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  saveProfile(): void {
    // replace with the current user id
    const id = 1;
    this.userService.updateUser(this.user).subscribe();
  }
}