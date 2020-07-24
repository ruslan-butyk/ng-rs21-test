import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Label } from 'ng2-charts';

import { ChartComponent } from '../chart.component';

@Component({
  selector: 'rs21-facebook-chart',
  templateUrl: './facebook-chart.component.html',
  styleUrls: ['./facebook-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacebookChartComponent extends ChartComponent implements OnInit, OnChanges {
  @Input() public nums: number[];
  @Input() public places: Label[];

  constructor() {
    super({
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
    }, 'pie');
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.places) {
      this.preFillColorMap(this.places as string[]);
      this.colors = [{
        backgroundColor: this.places.map((place: string) => this.colorMap.get(place))
      }];
    }
  }
}
