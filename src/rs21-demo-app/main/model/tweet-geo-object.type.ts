import { TweetMetaData } from './tweet-meta-data.interface';

export type TweetGeoObject = GeoJSON.Feature<GeoJSON.Point, TweetMetaData>;
