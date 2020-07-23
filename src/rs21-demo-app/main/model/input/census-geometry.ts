import { Polygon } from 'geojson';

export interface CensusGeometry {
  geometry: Polygon;
  GEOID: string;
}
