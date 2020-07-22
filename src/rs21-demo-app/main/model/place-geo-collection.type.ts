import { PlaceMetaData } from './place-meta-data.interface';

export type PlaceGeoCollection = GeoJSON.FeatureCollection<GeoJSON.Point, PlaceMetaData>;
