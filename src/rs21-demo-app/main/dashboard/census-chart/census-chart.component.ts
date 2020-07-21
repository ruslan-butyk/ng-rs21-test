import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'rs21-census-chart',
  templateUrl: './census-chart.component.html',
  styleUrls: ['./census-chart.component.scss']
})
export class CensusChartComponent implements OnInit {
  public readonly chartType: ChartType = 'doughnut';
  public labels: Label[] = ['Male', 'Female'];
  public dataSets: MultiDataSet = [
    [55, 25, 20]
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
