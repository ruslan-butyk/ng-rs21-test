import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

import { ChartComponent } from '../chart.component';

@Component({
  selector: 'rs21-census-chart',
  templateUrl: './census-chart.component.html',
  styleUrls: ['./census-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CensusChartComponent extends ChartComponent implements OnInit, OnChanges {
  public labels: Label[] = ['Male', 'Female'];
  public dataSets: MultiDataSet;

  @Input() public male: number;
  @Input() public female: number;

  constructor() {
    super({
      responsive: true,
      aspectRatio: 1.5
    }, 'doughnut');
  }

  public ngOnInit(): void {
    this.colors = [{
      backgroundColor: ['rgb(63, 81, 181)', 'rgb(255, 64, 129)']
    }];
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.male || changes.female) {
      this.dataSets = [[this.male, this.female]];
    }
  }
}
