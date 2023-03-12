import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss'],
})
export class AddcarComponent {
  Car = <Car>{};

  constructor(private carService: CarsService) {}

  addCar(){
    this.carService.postCar(this.Car);
  }
}
