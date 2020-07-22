import { GeoJsonProperties, Geometry } from 'geojson';

export interface CensusMetaData extends GeoJsonProperties {
  location: Geometry;
}

export interface Census {
  geometry: Geometry;
  properties: CensusMetaData;
}
