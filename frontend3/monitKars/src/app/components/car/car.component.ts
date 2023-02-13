import { Component } from '@angular/core';
import carData from '../../../dummyData/car.json'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {


  car = carData;


}
