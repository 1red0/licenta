import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-maintenancechart',
  templateUrl: './maintenancechart.component.html',
  styleUrls: ['./maintenancechart.component.scss']
})
export class MaintenancechartComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  public barChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [1000, 200, 100, 500, 150, 2265, 200], 
      label: 'Maintenance Costs (Euro) Car1', 
      borderColor: ['rgb(0, 0, 0)'],
      borderWidth: 1
    },
    {
      data: [1000, 250, 100, 700, 400, 1000, 200], 
      label: 'Maintenance Costs (Euro) Car2', 
      borderColor: ['rgb(0, 0, 0)'],
      borderWidth: 1
    },
    {
      data: [2000, 450, 200, 1200, 550, 3265, 400], 
      label: 'Maintenance Costs (Euro) Total cars', 
      borderColor: ['rgb(0, 0, 0)'],
      borderWidth: 1
    },
  ];
  ngOnInit() {
  }
}
