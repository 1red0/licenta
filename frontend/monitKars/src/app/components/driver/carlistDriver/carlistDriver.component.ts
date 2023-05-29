import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-carlistDriver',
  templateUrl: './carlistDriver.component.html',
})
export class CarlistComponentDriver {
  CarsList = <Car[]>{};
  currentUser = <string>{};

  constructor(
    private carService: CarsService,
    private router: Router,
    private kcService: KeycloakService
  ) {}

  async ngOnInit() {
    this.currentUser =
      this.kcService.getUsername() +
      ' - ' +
      this.kcService.getKeycloakInstance().subject;
    console.log(this.currentUser);
    this.carService.getDriverCars(this.currentUser).subscribe((res) => {
      this.CarsList = res;
    });
  }

  showCar(id?: string | null) {
    this.router.navigate(['/carDriver', { carID: id }]);
  }

  deleteCar(id?: string | null) {
    this.carService.deleteCar(Number(id)).subscribe();
    window.location.reload();
  }

  editCar(id?: string | null) {
    this.router.navigate(['/editCarDriver', { carID: id }]);
  }
}
