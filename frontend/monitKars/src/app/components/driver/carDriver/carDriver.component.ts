import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-car-driver',
  templateUrl: './carDriver.component.html',
})
export class CarComponentDriver {
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
  ) { }

  editCar(id?: string | null) {
    this.router.navigate(['/editCarDriver', { carID: id }]);
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
