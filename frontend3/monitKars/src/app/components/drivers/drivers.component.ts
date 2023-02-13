import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import driversList from '../../../dummyData/drivers.json'
import { Router } from '@angular/router'

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent {

  constructor(private router:Router) {}

  drivers: User[] = driversList;

  showDriver(id: number) {
    this.router.navigate(['/account', {userID: id}]
  ); 
  }

}
