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

  ngOnInit(): void {
    this.carService.getManufacturers().subscribe((res) => {
      this.man = res;
      let localdata: number[] = [];
      this.man.forEach((obj, index) => {
        this.carService.getNumberOfCarsManufacturers(obj).subscribe((res) => {
          localdata.push(res);
          if (index + 1 == this.man.length) {
            this.manNum = localdata;
          }
        });
      });
    });
  }

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };

  public pieChartLegend = true;
  public pieChartPlugins = [];
}
