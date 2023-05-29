import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { forkJoin, Subscription } from 'rxjs';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-chart-manufacturers',
  templateUrl: './chart-manufacturers.html',
})
export class ChartComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor(private carService: CarsService) {}

  chart: Chart | undefined;
  man = <string[]>{};
  manNum: number[] = [];
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
      labels: this.man,
      datasets: [
        {
          data: this.manNum,
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
    this.carService.getManufacturers().subscribe((res) => {
      this.man = res;

      const fetchStatusNoCarsObservables = this.man.map((obj) =>
        this.carService.getNumberOfCarsManufacturers(obj)
      );

      this.chartSubscription = forkJoin(fetchStatusNoCarsObservables).subscribe(
        (numbers) => {
          this.manNum = numbers;
          this.initializeChart();
        }
      );
    });
  }
}
