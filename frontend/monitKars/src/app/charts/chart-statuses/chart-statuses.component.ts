import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { forkJoin, Subscription } from 'rxjs';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-chart-statuses',
  templateUrl: './chart-statuses.component.html',
  styleUrls: ['./chart-statuses.component.scss'],
})
export class ChartStatusesComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor(private carService: CarsService) {}

  chart: Chart | undefined;
  stat = <string[]>{};
  statNum: number[] = [];
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
      labels: this.stat,
      datasets: [
        {
          data: this.statNum,
          backgroundColor: ['#00FF00', '#FFA500', '#FF0000'],
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
    this.carService.getStatuses().subscribe((res) => {
      this.stat = res;

      const fetchStatusNoCarsObservables = this.stat.map((obj) =>
        this.carService.getStatusNoCars(obj)
      );

      this.chartSubscription = forkJoin(fetchStatusNoCarsObservables).subscribe(
        (numbers) => {
          this.statNum = numbers;
          this.initializeChart();
        }
      );
    });
  }
}
