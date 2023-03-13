import { Component, OnInit } from '@angular/core';
import maintenanceData from '../../../dummyData/maintenance.json';
@Component({
  selector: 'app-maintenancechart',
  templateUrl: './maintenancechart.component.html',
  styleUrls: ['./maintenancechart.component.scss'],
})
export class MaintenancechartComponent implements OnInit {
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
  public barChartLegend = true;
  public barChartData = maintenanceData;
  ngOnInit() {}
}
