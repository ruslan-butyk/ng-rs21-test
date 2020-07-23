import { Component, Input, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'rs21-facebook-chart',
  templateUrl: './facebook-chart.component.html',
  styleUrls: ['./facebook-chart.component.scss']
})
export class FacebookChartComponent implements OnInit {
  public readonly chartType: ChartType = 'pie';

  @Input() public nums: number[];
  @Input() public places: Label[];

  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    aspectRatio: 1.5,
    title: {
      display: true,
      text: 'Number of public places',
      position: 'top'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
