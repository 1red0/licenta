import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { CarsService } from 'src/app/services/cars/cars.service';
import { UsersService } from 'src/app/services/users/users.service';
import manufacturersList from '../../../../lists/manufacturers.json';
import colorList from '../../../../lists/colors.json';
import carTypesList from '../../../../lists/carTypes.json';
import carFuelsList from '../../../../lists/carFuels.json';
import carOilsList from '../../../../lists/carOils.json';
import carStatusesList from '../../../../lists/statuses.json';
import carEnginesList from '../../../../lists/carEngines.json';
import carTires from '../../../../lists/tiresSizes.json';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss'],
})
export class AddcarComponent implements OnInit {
  public carTypes = carTypesList;

  public manufacturers = manufacturersList;

  public colors = colorList;

  public statuses = carStatusesList;

  public oils = carOilsList;

  public fuels = carFuelsList;

  public tires = carTires;

  public engines = carEnginesList;

  Car = <Car>{};

  Drivers: any;

  CarsList = <Car[]>{};

  constructor(
    private carService: CarsService,
    private driverService: UsersService,
    private router: Router
  ) {}

  exactLengthValidator(expectedLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && value.length !== expectedLength) {
        return {
          exactLength: { expected: expectedLength, actual: value.length },
        };
      }
      return null;
    };
  }

  carPlateNumberValidator(control: AbstractControl): ValidationErrors | null {
    const plateNumber = control.value;

    const pattern = /^[A-Z]{2}\d{2}[A-Z]{3}$/;

    if (!pattern.test(plateNumber)) {
      return { invalidPlateNumber: true };
    }

    return null;
  }

  addCarForm = new FormGroup({
    carName: new FormControl('', [Validators.required]),
    carType: new FormControl('', Validators.required),
    carMaintenanceStatus: new FormControl('', Validators.required),
    carPeriodicRevision: new FormControl('', Validators.required),
    carOwnerID: new FormControl(''),
    carInsurance: new FormControl('', Validators.required),
    carVignette: new FormControl('', Validators.required),
    carTireSizes: new FormControl('', Validators.required),
    carVinNumber: new FormControl('', [
      Validators.required,
      this.exactLengthValidator(17),
    ]),
    carMilage: new FormControl('', Validators.required),
    carColor: new FormControl('', Validators.required),
    carYear: new FormControl('', Validators.required),
    carModel: new FormControl('', Validators.required),
    carManufacturer: new FormControl('', Validators.required),
    carEngine: new FormControl('', Validators.required),
    carPlateNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      this.carPlateNumberValidator,
    ]),
    carOil: new FormControl('', Validators.required),
    carFuel: new FormControl('', Validators.required),
  });

  async addCar() {
    try {
      this.Car = this.addCarForm.value;
      if (this.addCarForm.value.carFuel === 'Electricity') {
        this.Car.carOil = '-';
      }
      this.Car.carID = null;
      this.Car.carOrganisation = environment.orgName;
      console.log(this.Car);

      await firstValueFrom(this.carService.postCar(this.Car));

      this.router.navigate(['/carlist']).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error submitting form:', error);
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
  }
}
