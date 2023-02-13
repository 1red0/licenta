import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  car:any;

  constructor(private carService:CarsService){}

  ngOnInit(){
    this.carService.getCar(1).subscribe((res)=>{this.car=res;})
  }


}
