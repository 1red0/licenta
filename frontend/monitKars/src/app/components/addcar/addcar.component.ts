import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { CarsService } from 'src/app/services/cars/cars.service';
import { UsersService } from 'src/app/services/users/users.service';
import manufacturersList from '../../../lists/manufacturers.json';
import colorList from '../../../lists/colors.json';
import carTypesList from '../../../lists/carTypes.json';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss'],
})
export class AddcarComponent implements OnInit {

  public carTypes = carTypesList;

  public manufacturers = manufacturersList;

  public colors = colorList;

  Car = <Car>{};
  Drivers = <User[]>{};

  constructor(
    private carService: CarsService,
    private driverService: UsersService
  ) {}

  addCar() {
    //Code to get car details from form
    this.carService.postCar(this.Car);
  }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe((res: User[]) => {
      this.Drivers = res;
    });

  }
}
