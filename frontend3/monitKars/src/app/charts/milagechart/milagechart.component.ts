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
      label: 'Milage (Kilometers) - Car1', 
      backgroundColor: ['rgb(54, 162, 235)'],
      borderColor: ['rgb(0, 0, 0)'],
      borderWidth: 1
    },
    {
      data: [6000, 6830, 8830, 10200, 12000, 20265, 25300], 
      label: 'Milage (Kilometers) - Car2', 
      backgroundColor: ['rgb(177, 250, 68)'],
      borderColor: ['rgb(0, 0, 0)'],
      borderWidth: 1
    },
    {
      data: [25000, 33660, 39660, 60400, 74000, 100530, 124300], 
      label: 'Milage (Kilometers) - Total Cars', 
      backgroundColor: ['rgb(250, 68, 68)'],
      borderColor: ['rgb(0, 0, 0)'],
      borderWidth: 1
    },
  ];
  ngOnInit() {
  }
}
