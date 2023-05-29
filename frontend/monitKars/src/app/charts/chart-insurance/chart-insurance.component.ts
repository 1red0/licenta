import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { Subscription, forkJoin } from 'rxjs';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-chart-insurance',
  templateUrl: './chart-insurance.component.html',
})
export class ChartInsuranceComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor(private carService: CarsService) {}

  chart: Chart | undefined;
  carNum: number[] = [];
  valid = <string[]>{};
  chartSubscription: Subscription | undefined;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeChart();
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.chartSubscription) {
      this.chartSubscription.unsubscribe();
    }
  }

  initializeChart(): void {
    const canvas = this.chartCanvas.nativeElement.getContext('2d');
    if (!canvas) return;

    if (this.chart) {
      this.chart.destroy();
    }

    const data: ChartData = {
      labels: ['Valabile', 'Expirate'],
      datasets: [
        {
          data: this.carNum,
          backgroundColor: ['#00FF00', '#FF0000'],
        },
      ],
    };

    const options: ChartOptions<keyof ChartTypeRegistry> = {
      responsive: true,
      animation: {
        animateRotate: true,
        animateScale: true,
      } as ChartOptions<keyof ChartTypeRegistry>['animation'],
    };

    this.chart = new Chart(canvas, {
      type: 'pie',
      data,
      options,
    });
  }

  async ngOnInit(): Promise<void> {
    const validCars$ = this.carService.getInsuranceValidNoCars();
    const invalidCars$ = this.carService.getInsuranceInvalidNoCars();

    this.chartSubscription = forkJoin([validCars$, invalidCars$]).subscribe(
      ([validCars, invalidCars]) => {
        this.carNum = [validCars, invalidCars];
        this.initializeChart();
      }
    );
  }
}
