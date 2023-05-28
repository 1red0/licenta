import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-admin',
  templateUrl: './carAdmin.component.html',
  styleUrls: ['./carAdmin.component.scss'],
})
export class CarComponentAdmin implements OnInit {
  car = <Car>{};

  idCar: any = this.route.snapshot.paramMap.get('carID');

  today = new Date();

  inspectionDate = Boolean();

  insuranceDate = Boolean();

  vignetteDate = Boolean();

  maintenanceStatus = String();

  constructor(
    private carService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  editCar(id?: string | null) {
    this.router.navigate(['/editCar', { carID: id }]);
  }

  ngOnInit() {
    this.carService.getCar(this.idCar).subscribe((res) => {
      this.car = res;
      let inspection = new Date(this.car.carPeriodicRevision);

      if (inspection < new Date()) {
        this.inspectionDate = false;
      } else {
        this.inspectionDate = true;
      }

      let insurance = new Date(this.car.carInsurance);

      if (insurance < new Date()) {
        this.insuranceDate = false;
      } else {
        this.insuranceDate = true;
      }

      let vignette = new Date(this.car.carVignette);

      if (vignette < new Date()) {
        this.vignetteDate = false;
      } else {
        this.vignetteDate = true;
      }

      this.maintenanceStatus = this.car.carMaintenanceStatus;
    });
  }
}
