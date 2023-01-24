import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car-service.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  car: Car = new Car;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  editCar(car: Car): void {
    this.car = car;
  }

  deleteCar(car: Car): void {
    this.carService.deleteCar(car.id).subscribe();
  }

  addCar(car: Car): void {
    this.carService.addCar(car).subscribe();
  }
}
