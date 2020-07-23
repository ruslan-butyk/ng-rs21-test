import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlaceMetaData } from '../model/place-meta-data.interface';
import { TweetMetaData } from '../model/tweet-meta-data.interface';
import { CensusMetaData } from '../model/census-meta-data.interface';
import { PlaceChartData } from '../model/place-chart-data.interface';
import { TweetChartData } from '../model/tweet-chart-data.interface';
import { CensusChartData } from '../model/census-chart-data.interface';
import { CensusMapper } from '../util/census.mapper';
import { TweetMapper } from '../util/tweet.mapper';
import { PlaceMapper } from '../util/place.mapper';

@Component({
  selector: 'rs21-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnChanges {
  public fbChartData: PlaceChartData | undefined;
  public twitterChartData: TweetChartData | undefined;
  public censusChartData: CensusChartData | undefined;

  @Input() fbData: PlaceMetaData[] = [];
  @Input() twitterData: TweetMetaData[] = [];
  @Input() censusData: CensusMetaData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fbData && !changes.fbData.isFirstChange()) {
      this.fbChartData = PlaceMapper.mapToChartData(this.fbData);
    }
    if (changes.twitterData && !changes.twitterData.isFirstChange()) {
      this.twitterChartData = TweetMapper.mapToChartData(this.twitterData);
    }
    if (changes.censusData && !changes.censusData.isFirstChange()) {
      this.censusChartData = CensusMapper.mapToChartData(this.censusData);
    }
  }
}
