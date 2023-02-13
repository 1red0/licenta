import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent {

  CarsList:any;

  constructor(private carService:CarsService, private router:Router){}

  ngOnInit(){
    this.carService.getCars().subscribe((res)=>{this.CarsList=res;})
  }

  showCar(id: number) {
    this.router.navigate(['/car', {carID: id}]
  ); 
  }
  

}
