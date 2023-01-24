import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car-service.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  car: Car = new Car;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = 1;
    this.carService.getCar(id).subscribe(car => this.car = car);
  }

  saveCar(): void {
    // replace with the current car id
    const id = 1;
    this.carService.updateCar(this.car).subscribe();
  }

  cancel(): void {
    
  }
}

