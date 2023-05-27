import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-manufacturers-chart',
  templateUrl: './chart-manufacturers.html',
  styleUrls: ['./chart-manufacturers.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(private carService: CarsService) {}
  man = <string[]>{};
  manNum: number[] = [];

  async ngOnInit(): Promise<void> {
    (await this.carService.getManufacturers()).subscribe((res) => {
      this.man = res;
      let localdata: number[] = [];
      this.man.forEach(async (obj, index) => {
        (await this.carService.getNumberOfCarsManufacturers(obj)).subscribe(
          (res) => {
            localdata.push(res);
            if (index + 1 == this.man.length) {
              this.manNum = localdata;
            }
          }
        );
      });
    });
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
