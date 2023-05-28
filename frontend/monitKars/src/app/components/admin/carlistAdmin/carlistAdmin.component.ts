import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-carlist-admin',
  templateUrl: './carlistAdmin.component.html',
  styleUrls: ['./carlistAdmin.component.scss'],
})
export class CarlistComponentAdmin implements OnInit {
  CarsList = <Car[]>{};

  constructor(private carService: CarsService, private router: Router) {}

  async ngOnInit() {
    this.carService.getCars().subscribe((res) => {
      this.CarsList = res;
    });
  }

  showCar(id?: string | null) {
    this.router.navigate(['/car', { carID: id }]);
  }

  deleteCar(id?: string | null) {
    this.carService.deleteCar(Number(id)).subscribe();
    window.location.reload();
  }

  editCar(id?: string | null) {
    this.router.navigate(['/editCar', { carID: id }]);
  }
}
