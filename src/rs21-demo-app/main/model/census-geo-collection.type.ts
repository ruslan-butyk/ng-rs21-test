import { CensusMetaData } from './census-meta-data.interface';

export type CensusGeoCollection = GeoJSON.FeatureCollection<GeoJSON.Polygon, CensusMetaData>;
