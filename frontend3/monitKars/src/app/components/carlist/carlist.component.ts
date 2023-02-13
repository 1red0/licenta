import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import carList from '../../../dummyData/carlist.json'

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent {

  cars: Car[] = carList;
    

}
