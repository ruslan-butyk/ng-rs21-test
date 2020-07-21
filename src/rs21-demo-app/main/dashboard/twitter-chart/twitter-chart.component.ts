import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'rs21-twitter-chart',
  templateUrl: './twitter-chart.component.html',
  styleUrls: ['./twitter-chart.component.scss']
})
export class TwitterChartComponent implements OnInit {
  public readonly chartType: ChartType = 'bar';
  // Mocked data
  public dataSets: ChartDataSets[] = [{
    data: [25, 45, 0],
    label: 'Twits'
  }];
  public labels: Label[] = ['2014-10-30', '2014-10-31'];

  constructor() { }

  ngOnInit(): void {
  }

}
