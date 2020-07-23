import { CensusMetaData } from './census-meta-data.interface';

export type CensusGeoObject = GeoJSON.Feature<GeoJSON.Polygon, CensusMetaData>;
