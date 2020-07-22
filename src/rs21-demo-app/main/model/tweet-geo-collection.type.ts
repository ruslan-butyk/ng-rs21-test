import { TweetMetaData } from './tweet-meta-data.interface';

export type TweetGeoCollection = GeoJSON.FeatureCollection<GeoJSON.Point, TweetMetaData>;
