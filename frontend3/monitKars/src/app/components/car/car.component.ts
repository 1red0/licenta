import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import carData from '../../../dummyData/car.json'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  car:any;

  constructor(private carService:CarsService){}

  ngOnInit(){
    this.carService.getcar(1).subscribe((res)=>{this.car=res;})
  }


}
