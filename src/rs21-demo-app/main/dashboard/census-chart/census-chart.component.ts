import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'rs21-census-chart',
  templateUrl: './census-chart.component.html',
  styleUrls: ['./census-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CensusChartComponent implements OnInit, OnChanges {
  public readonly chartType: ChartType = 'doughnut';
  public labels: Label[] = ['Male', 'Female'];
  public dataSets: MultiDataSet;

  @Input() public male: number;
  @Input() public female: number;

  public chartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1.5
  };

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.male || changes.female) {
      this.dataSets = [[this.male, this.female]];
    }
  }
}
