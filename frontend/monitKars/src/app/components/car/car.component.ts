import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  car:any;

  idCar:any = this.route.snapshot.paramMap.get('carID')

  constructor(private carService:CarsService, private route: ActivatedRoute){}

  ngOnInit(){
    this.carService.getCar(this.idCar).subscribe((res)=>{this.car=res;})
  }


}
