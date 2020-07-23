import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'rs21-twitter-chart',
  templateUrl: './twitter-chart.component.html',
  styleUrls: ['./twitter-chart.component.scss']
})
export class TwitterChartComponent implements OnInit, OnChanges {
  public readonly chartType: ChartType = 'bar';
  public dataSets: ChartDataSets[];

  @Input() public nums: number[];
  @Input() public labels: Label[];

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.nums) {
      this.dataSets = [{
        data: this.nums,
        label: 'Twits'
      }];
    }
  }
}
