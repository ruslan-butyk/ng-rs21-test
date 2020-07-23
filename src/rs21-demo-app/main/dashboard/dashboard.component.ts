import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TweetSentiment } from '../model/tweet-sentiment.enum';
import { PlaceMetaData } from '../model/place-meta-data.interface';
import { TweetMetaData } from '../model/tweet-meta-data.interface';
import { CensusMetaData } from '../model/census-meta-data.interface';

export interface PlaceChartData {
  types: string[];
  nums: number[];
}

export interface TweetChartData {
  labels: string[];
  nums: number[];
}

export interface CensusChartData {
  male: number;
  female: number;
}

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

  @Input() fbData: PlaceMetaData[] | null = null;
  @Input() twitterData: TweetMetaData[] | null = null;
  @Input() censusData: CensusMetaData[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fbData && !changes.fbData.isFirstChange()) {
      const places: Partial<{}> = {};
      this.fbData.forEach(data => {
        const type: string = data.type;
        const prevNum = places[type] || 0;
        places[type] = prevNum + 1;
      });
      this.fbChartData = {types: Object.keys(places), nums: Object.values(places)};
    }
    if (changes.twitterData && !changes.twitterData.isFirstChange()) {
      const sentimentMap: Partial<{}> = {};
      this.twitterData.forEach(data => {
        const sentiment: number = data.sentiment;
        const prevSentiment: number = sentimentMap[sentiment] || 0;
        sentimentMap[sentiment] = prevSentiment + 1;
      });
      const labels = Object.keys(sentimentMap).map(key => TweetSentiment[key]);
      this.twitterChartData = {labels, nums: Object.values(sentimentMap)};
    }
    if (changes.censusData && !changes.censusData.isFirstChange()) {
      let male = 0;
      let female = 0;
      this.censusData.forEach(data => {
        male += data.male;
        female += data.female;
      });
      this.censusChartData = {male, female};
    }
  }
}
