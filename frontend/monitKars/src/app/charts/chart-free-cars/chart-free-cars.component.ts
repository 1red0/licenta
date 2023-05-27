import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-chart-free-cars',
  templateUrl: './chart-free-cars.component.html',
  styleUrls: ['./chart-free-cars.component.scss'],
})
export class ChartFreeCarsComponent {
  constructor(private carService: CarsService) {}
  carNum: number[] = [];
  free = <string[]>{};

  async ngOnInit(): Promise<void> {
    this.free = ['Free', 'Taken'];

    let localdata: number[] = [];

    (await this.carService.getFreeNoCars()).subscribe((res) => {
      localdata.push(res);
    });

    (await this.carService.getTakenNoCars()).subscribe((res) => {
      localdata.push(res);
      this.carNum = localdata;
    });
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  public pieChartLegend = true;
  public pieChartPlugins = [];
}
