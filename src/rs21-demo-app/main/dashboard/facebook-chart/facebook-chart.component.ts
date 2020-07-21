import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'rs21-facebook-chart',
  templateUrl: './facebook-chart.component.html',
  styleUrls: ['./facebook-chart.component.scss']
})
export class FacebookChartComponent implements OnInit {
  public readonly chartType: ChartType = 'pie';
  // Mocked data
  public data: number[] = [40, 10, 20, 20, 10];
  public labels: Label[] = ['Hotel', 'Bar', 'Local business', 'Landmark', 'Restaurant/cafe', '...'];

  constructor() { }

  ngOnInit(): void {
  }

}
