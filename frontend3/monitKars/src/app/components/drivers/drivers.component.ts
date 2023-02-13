import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import driversList from '../../../dummyData/drivers.json'

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent {

  drivers: User[] = driversList;

}
