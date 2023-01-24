import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-milagechart',
  templateUrl: './milagechart.component.html',
  styleUrls: ['./milagechart.component.scss']
})
export class MilagechartComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartColor = 'red';
  public barChartData = [
    {
      data: [19000, 26830, 30830, 50200, 62000, 80265, 99000], 
      label: 'Milage (Kilometers)', 
      backgroundColor: ['rgb(54, 162, 235)'],
      borderColor: ['rgb(0, 0, 0)'],
      borderWidth: 1
    },
  ];
  ngOnInit() {
  }
}
