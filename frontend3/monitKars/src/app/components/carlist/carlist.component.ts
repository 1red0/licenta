import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent {

  CarsList:any;

  constructor(private carService:CarsService){}

  ngOnInit(){
    this.carService.getcars().subscribe((res)=>{this.CarsList=res;})
  }
  

}
