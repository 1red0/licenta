import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-carlist-admin',
  templateUrl: './carlistAdmin.component.html',
})
export class CarlistComponentAdmin implements OnInit {
  CarsList = <Car[]>{};
  searchQuery: string | null = null;

  sortOptions: string[] = ['Ascendent', 'Descendent'];
  selectedSortOption: string = 'Ascendent';

  constructor(private carService: CarsService, private router: Router) {}

  onSortOptionSelected(event: any) {
    const option = event.target.value;
    this.selectedSortOption = option;

    if (option === 'Ascendent') {
      this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
    } else if (option === 'Descendent') {
      this.CarsList.sort((a, b) => b.carName.localeCompare(a.carName));
    }
  }

  filter(filter: string) {
    if (filter === 'iVAL') {
      this.carService.getInspectionValidCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'iEXP') {
      this.carService.getInspectionInvalidCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'vVAL') {
      this.carService.getVignetteValidCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'vEXP') {
      this.carService.getVignetteInvalidCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'aVAL') {
      this.carService.getInsuranceValidCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'aEXP') {
      this.carService.getInsuranceInvalidCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'free') {
      this.carService.getFreeCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'taken') {
      this.carService.getTakenCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'mREA') {
      this.carService.getStatusCars('Rea').subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'mOK') {
      this.carService.getStatusCars('Ok').subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'mBUNA') {
      this.carService.getStatusCars('Buna').subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    } else if (filter === 'all') {
      this.carService.getCars().subscribe((res) => {
        this.CarsList = res;
        this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
        this.selectedSortOption = 'Ascendent';
      });
    }
  }

  searchCar() {
    this.carService.searchCars(this.searchQuery).subscribe((res) => {
      this.CarsList = res;
      this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
    });
  }

  async ngOnInit() {
    this.carService.getCars().subscribe((res) => {
      this.CarsList = res;
      this.CarsList.sort((a, b) => a.carName.localeCompare(b.carName));
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
