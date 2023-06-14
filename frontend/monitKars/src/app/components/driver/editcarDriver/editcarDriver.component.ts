import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars/cars.service';
import carStatusesList from '../../../../lists/statuses.json';
import carTires from '../../../../lists/tiresSizes.json';

@Component({
  selector: 'app-editcarDriver',
  templateUrl: './editcarDriver.component.html',
})
export class EditcarComponentDriver {
  car = <Car>{};

  updatedCar = <Car>{};

  public statuses = carStatusesList;
  public tires = carTires;

  idCar: any = this.route.snapshot.paramMap.get('carID');

  Drivers: any;

  constructor(
    private carService: CarsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editCarForm = new FormGroup({
    carName: new FormControl('', Validators.required),
    carMaintenanceStatus: new FormControl('', Validators.required),
    carPeriodicRevision: new FormControl('', Validators.required),
    carInsurance: new FormControl('', Validators.required),
    carVignette: new FormControl('', Validators.required),
    carTireSizes: new FormControl('', Validators.required),
    carMilage: new FormControl('', Validators.required),
  });

  async editCar() {
    try {
      this.updatedCar = this.editCarForm.value;
      this.updatedCar.carID = Number(this.idCar);
      this.updatedCar.carOwnerID = this.car.carOwnerID;
      this.updatedCar.carColor = this.car.carColor;
      this.updatedCar.carEngine = this.car.carEngine;
      this.updatedCar.carPlateNumber = this.car.carPlateNumber;
      this.updatedCar.carFuel = this.car.carFuel;
      this.updatedCar.carManufacturer = this.car.carManufacturer;
      this.updatedCar.carModel = this.car.carModel;
      this.updatedCar.carType = this.car.carType;
      this.updatedCar.carOil = this.car.carOil;
      this.updatedCar.carOrganisation = this.car.carOrganisation;
      this.updatedCar.carVinNumber = this.car.carVinNumber;
      this.updatedCar.carYear = this.car.carYear;
      this.updatedCar.carType = this.car.carType;
      console.log(this.updatedCar);

      await firstValueFrom(
        this.carService.updateCar(Number(this.idCar), this.updatedCar)
      );

      this.router.navigate(['/carDriver', { carID: this.idCar }]).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error updating car:', error);
      // Handle error
    }
  }

  ngOnInit(): void {
    this.carService.getCar(this.idCar).subscribe((res: Car) => {
      this.editCarForm.setValue({
        carMilage: res.carMilage,
        carInsurance: res.carInsurance,
        carPeriodicRevision: res.carPeriodicRevision,
        carTireSizes: res.carTireSizes,
        carVignette: res.carVignette,
        carMaintenanceStatus: res.carMaintenanceStatus,
        carName: res.carName,
      });
      this.car = res;
    });
  }
}
