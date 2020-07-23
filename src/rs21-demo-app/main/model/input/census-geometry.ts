import { Geometry } from 'geojson';

export interface CensusGeometry {
  geometry: Geometry;
  GEOID: string;
}
