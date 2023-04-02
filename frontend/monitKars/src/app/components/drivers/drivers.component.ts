import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  constructor(private userService: UsersService) {}

  drivers = <User[]>{};

  ngOnInit() {
    this.userService.getDrivers().subscribe((res) => {
      this.drivers = res;
    });
  }
}
