import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { CarsService } from 'src/app/services/cars/cars.service';
import { UsersService } from 'src/app/services/users/users.service';
import manufacturersList from '../../../lists/manufacturers.json';
import colorList from '../../../lists/colors.json';
import carTypesList from '../../../lists/carTypes.json';
import carFuelsList from '../../../lists/carFuels.json'
import carOilsList from '../../../lists/carOils.json'
import carStatusesList from '../../../lists/statuses.json'
import carTires from '../../../lists/tiresSizes.json'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss'],
})
export class AddcarComponent implements OnInit {
  public carTypes = carTypesList;

  public manufacturers = manufacturersList;

  public colors = colorList;

  public statuses = carStatusesList;

  public oils = carOilsList;

  public fuels = carFuelsList;

  public tires = carTires;

  Car = <Car>{};
  Drivers = <User[]>{};

  constructor(
    private carService: CarsService,
    private driverService: UsersService
  ) {}

  addCarForm = new FormGroup({
    carName: new FormControl(''),
    carType: new FormControl(''),
    carMaintenanceStatus: new FormControl(''),
    carPeriodicRevision: new FormControl(''),
    carOwnerID: new FormControl(''),
    carInsurance: new FormControl(''),
    carVignette: new FormControl(''),
    carTireSizes: new FormControl(''),
    carVinNumber: new FormControl(''),
    carPlate: new FormControl(''),
    carMilage: new FormControl(''),
    carColor: new FormControl(''),
    carYear: new FormControl(''),
    carModel: new FormControl(''),
    carManufacturer: new FormControl(''),
    carEngine: new FormControl(''),
    carPlateNumber: new FormControl(''),
    carOils: new FormControl(''),
    carFuel: new FormControl(''),
  });

  addCar() {
    //Code to get car details from form
    
    this.Car = this.addCarForm.value;
    this.Car.carID = null;
    console.log(this.Car);
    this.carService.postCar(this.Car).subscribe();
  }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe((res: User[]) => {
      this.Drivers = res;
    });
  }
}
