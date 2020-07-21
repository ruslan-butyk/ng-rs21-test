import { Point } from 'mapbox-gl';

export class TweetModel {
  username: string;
  message: string;
  datetime: Date;
  location: Point;
}
