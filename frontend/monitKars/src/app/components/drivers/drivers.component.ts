import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { each } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  constructor(private router: Router, private userService: UsersService) {}

  drivers = <User[]>{};

  ngOnInit() {
    this.userService.getDrivers().subscribe((res) => {
      this.drivers = res;
    });
  }
}
