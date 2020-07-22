import { Point } from 'geojson';

export interface Place {
  place: string;
  type: string;
  checkins: number;
  location: Point;
}
