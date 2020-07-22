import { Point } from 'geojson';

export interface Tweet {
  username: string;
  tweet: string;
  datetime: string;
  location: Point;
  sentiment: number;
}
