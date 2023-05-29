import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { forkJoin, Subscription } from 'rxjs';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-chart-free-cars',
  templateUrl: './chart-free-cars.component.html',
})
export class ChartFreeCarsComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor(private carService: CarsService) {}

  chart: Chart | undefined;
  carNum: number[] = [];
  free = <string[]>{};
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
      labels: ['Libere', 'Luate'],
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
    const freeCars$ = this.carService.getFreeNoCars();
    const takenCars$ = this.carService.getTakenNoCars();

    this.chartSubscription = forkJoin([freeCars$, takenCars$]).subscribe(
      ([freeCars, takenCars]) => {
        this.carNum = [freeCars, takenCars];
        this.initializeChart();
      }
    );
  }
}
