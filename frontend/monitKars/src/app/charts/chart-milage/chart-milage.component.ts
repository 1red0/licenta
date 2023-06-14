import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { Subscription } from 'rxjs';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-chart-milage',
  templateUrl: './chart-milage.component.html',
})
export class ChartMilageComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  chart: Chart | undefined;
  labels: string[] = [];
  milages: number[] = [];
  chartSubscription: Subscription | undefined;

  constructor(private carService: CarsService) {}

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.chartSubscription) {
      this.chartSubscription.unsubscribe();
    }
  }

  async ngOnInit(): Promise<void> {
    this.chartSubscription = this.carService
      .getMilageOfCars()
      .subscribe((data) => {
        this.labels = data.map(
          (car: { carID: any; carName: any }) => `${car.carID} - ${car.carName}`
        );
        this.milages = data.map((car) => parseInt(car.carMilage, 10));
        this.initializeChart();
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeChart();
    });
  }

  initializeChart(): void {
    const canvas = this.chartCanvas.nativeElement.getContext('2d');
    if (!canvas) return;

    if (this.chart) {
      this.chart.destroy();
    }

    const data: ChartData = {
      labels: this.labels,
      datasets: [
        {
          data: this.milages,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(165, 72, 70, 0.8)',
          label: 'Kilometraj',
          fill: true,
          borderWidth: 2,
          borderRadius: 25,
        },
      ],
    };

    const options: ChartOptions<keyof ChartTypeRegistry> = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        animateScale: true,
      } as ChartOptions<keyof ChartTypeRegistry>['animation'],
    };

    this.chart = new Chart(canvas, {
      type: 'bar',
      data,
      options,
    });
  }
}
