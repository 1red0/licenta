import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { CarsService } from 'src/app/services/cars/cars.service';
import { UsersService } from 'src/app/services/users/users.service';
import { environment } from 'src/environments/environment';
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
  carUpdated = <Car>{};

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

  editCar() {
    this.carUpdated = this.car;
    this.carService.updateCar(Number(this.idCar), this.carUpdated).subscribe();
    this.router.navigate(['/carlist']).then(() => {
      window.location.reload();
    });
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

    this.carService.getCar(this.idCar).subscribe((res) => {
      this.car = res;
    });
  }
}
