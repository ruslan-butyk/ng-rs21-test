import { Point } from 'mapbox-gl';

import { PlaceMetaData } from './place-meta-data.interface';

export class PlaceModel implements PlaceMetaData {
  name: string;
  type: string;
  checkins: number;
  location: Point;
}
