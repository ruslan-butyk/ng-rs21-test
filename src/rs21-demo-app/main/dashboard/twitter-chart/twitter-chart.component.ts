import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartComponent } from '../chart.component';
import { TweetSentiment } from '../../model/tweet-sentiment.enum';
import { TWEET_COLOR_MAP } from '../../model/tweet-color.map';

@Component({
  selector: 'rs21-twitter-chart',
  templateUrl: './twitter-chart.component.html',
  styleUrls: ['./twitter-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitterChartComponent extends ChartComponent implements OnInit, OnChanges {
  public dataSets: ChartDataSets[];
  public labels: Label[] = [
    `${TweetSentiment[TweetSentiment.Neutral]}`,
    `${TweetSentiment[TweetSentiment.Positive]}`,
    `${TweetSentiment[TweetSentiment.Negative]}`
  ];

  @Input() public nums: number[];

  constructor() {
    super({
      responsive: true,
      legend: {
        display: false
      }
    }, 'bar');
    this.colors = [
      TWEET_COLOR_MAP[TweetSentiment.Neutral],
      TWEET_COLOR_MAP[TweetSentiment.Positive],
      TWEET_COLOR_MAP[TweetSentiment.Negative]
    ];
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.nums || changes.labels) {
      this.dataSets = [{
        data: this.nums,
        backgroundColor: this.colors
      }];
    }
  }
}
