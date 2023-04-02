import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  constructor(private carService: CarsService) {}
  man = <string[]>{};
  manNum: number[] = [];
  ngOnInit(): void {
    this.carService.getManufacturers().subscribe((res) => {
      this.man = res;
      this.man.forEach((obj) => {
        this.carService.getNumberOfCarsManufacturers(obj).subscribe((res) => {
          this.manNum.push(res);
        });
      });
      console.log(this.manNum);
    });
  }

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
