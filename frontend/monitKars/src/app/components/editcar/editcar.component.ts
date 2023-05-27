import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { CarsService } from 'src/app/services/cars/cars.service';
import { UsersService } from 'src/app/services/users/users.service';
import manufacturersList from '../../../lists/manufacturers.json';
import colorList from '../../../lists/colors.json';
import carTypesList from '../../../lists/carTypes.json';
import carFuelsList from '../../../lists/carFuels.json';
import carOilsList from '../../../lists/carOils.json';
import carStatusesList from '../../../lists/statuses.json';
import carEnginesList from '../../../lists/carEngines.json';
import carTires from '../../../lists/tiresSizes.json';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.scss'],
})
export class EditcarComponent {
  public carTypes = carTypesList;

  public manufacturers = manufacturersList;

  public colors = colorList;

  public statuses = carStatusesList;

  public oils = carOilsList;

  public fuels = carFuelsList;

  public tires = carTires;

  public engines = carEnginesList;

  car = <Car>{};

  updatedCar = <Car>{};

  idCar: any = this.route.snapshot.paramMap.get('carID');

  Drivers: any;

  constructor(
    private carService: CarsService,
    private driverService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editCarForm = new FormGroup({
    carName: new FormControl(''),
    carType: new FormControl(''),
    carMaintenanceStatus: new FormControl(''),
    carPeriodicRevision: new FormControl(''),
    carOwnerID: new FormControl(''),
    carInsurance: new FormControl(''),
    carVignette: new FormControl(''),
    carTireSizes: new FormControl(''),
    carVinNumber: new FormControl(''),
    carMilage: new FormControl(''),
    carColor: new FormControl(''),
    carYear: new FormControl(''),
    carModel: new FormControl(''),
    carManufacturer: new FormControl(''),
    carEngine: new FormControl(''),
    carPlateNumber: new FormControl(''),
    carOil: new FormControl(''),
    carFuel: new FormControl(''),
  });

  async editCar() {
    try {
      this.updatedCar = this.editCarForm.value;
      this.updatedCar.carID = Number(this.idCar);
      if (this.editCarForm.value.carFuel === 'Electricity') {
        this.updatedCar.carOil = '-';
      }
      console.log(this.updatedCar);

      await firstValueFrom(
        this.carService.updateCar(Number(this.idCar), this.updatedCar)
      );

      this.router.navigate(['/car', { carID: this.idCar }]).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error updating car:', error);
      // Handle error
    }
  }

  ngOnInit(): void {
    this.driverService
      .getDrivers()
      .pipe(
        map((res: User[]) => {
          this.Drivers = res;
        })
      )
      .subscribe();

    this.carService.getCar(this.idCar).subscribe((res: Car) => {
      this.editCarForm.setValue({
        carColor: res.carColor,
        carEngine: res.carEngine,
        carFuel: res.carFuel,
        carMilage: res.carMilage,
        carModel: res.carModel,
        carOil: res.carOil,
        carPlateNumber: res.carPlateNumber,
        carInsurance: res.carInsurance,
        carPeriodicRevision: res.carPeriodicRevision,
        carTireSizes: res.carTireSizes,
        carVinNumber: res.carVinNumber,
        carYear: res.carYear,
        carVignette: res.carVignette,
        carMaintenanceStatus: res.carMaintenanceStatus,
        carOwnerID: res.carOwnerID,
        carType: res.carType,
        carName: res.carName,
        carManufacturer: res.carManufacturer,
      });
      this.car = res;
    });
  }
}
