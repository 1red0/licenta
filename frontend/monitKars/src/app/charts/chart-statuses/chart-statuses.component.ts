import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-chart-statuses',
  templateUrl: './chart-statuses.component.html',
  styleUrls: ['./chart-statuses.component.scss'],
})
export class ChartStatusesComponent {
  constructor(private carService: CarsService) {}
  stat = <string[]>{};
  statNum: number[] = [];

  async ngOnInit(): Promise<void> {
    (await this.carService.getStatuses()).subscribe((res) => {
      this.stat = res;
      let localdata: number[] = [];
      this.stat.forEach(async (obj, index) => {
        (await this.carService.getStatusNoCars(obj)).subscribe((res) => {
          localdata.push(res);
          if (index + 1 == this.stat.length) {
            this.statNum = localdata;
          }
        });
      });
    });
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  public pieChartLegend = true;
  public pieChartPlugins = [];
}
