import { Component, OnInit } from '@angular/core';
import milageData from '../../../dummyData/milage.json';
@Component({
  selector: 'app-milagechart',
  templateUrl: './milagechart.component.html',
  styleUrls: ['./milagechart.component.scss'],
})
export class MilagechartComponent implements OnInit {
  constructor() {}
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartColor = 'red';
  public barChartData = milageData;

  ngOnInit() {}
}
