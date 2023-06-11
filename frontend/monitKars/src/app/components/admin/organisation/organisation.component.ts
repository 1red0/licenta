import { Component } from '@angular/core';
import { Organisation } from 'src/app/models/organisation.model';
import { CarsService } from 'src/app/services/cars/cars.service';
import { UsersService } from 'src/app/services/users/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
})
export class OrganisationComponent {
  organisation = <Organisation>{};

  constructor(
    private carService: CarsService,
    private driverService: UsersService
  ) {}

  async ngOnInit() {
    this.organisation.organisationName = environment.orgName;
    this.organisation.organisationAddress = environment.orgAddr;
    this.organisation.organisationMail = environment.orgMail;
    this.organisation.organisationPhone = environment.orgPhone;

    this.carService.getNoCars().subscribe((res) => {
      this.organisation.numberOfCars = res;
    });

    this.driverService.getDrivers().subscribe((res) => {
      this.organisation.numberOfDrivers = res.length;
    });
  }
}
