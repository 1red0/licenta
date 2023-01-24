import { Component } from '@angular/core';
import { MaintenanceService } from '../../services/maintenance.service';
import { Maintenance } from '../../models/maintenance.model';
import { CarService } from '../../services/car-service.service';
import { Car } from '../../models/car.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  maintenances: Maintenance[] = [];
  cars: Car[] = []

  constructor(private maintenanceService: MaintenanceService, private carService: CarService) { }

  ngOnInit(): void {
    this.getMaintenances();
    this.getCars();
  }

  getMaintenances(): void {
    this.maintenanceService.getMaintenances().subscribe(maintenances => this.maintenances = maintenances);
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }
}
