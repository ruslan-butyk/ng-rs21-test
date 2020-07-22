import { Point } from 'mapbox-gl';
import { TweetSentiment } from './tweet-sentiment.enum';

export class TweetModel {
  username: string;
  message: string;
  datetime: Date;
  location: Point;
  sentiment: TweetSentiment;
}
