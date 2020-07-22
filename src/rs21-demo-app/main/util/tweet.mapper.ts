import { Point } from 'mapbox-gl';

import { TweetModel } from '../model/tweet.model';
import { Tweet } from '../model/input/tweet';
import { TweetGeoCollection } from '../model/tweet-geo-collection.type';
import { TweetGeoObject } from '../model/tweet-geo-object.type';

export class TweetMapper {
  public static mapToGeoCollection(data: Tweet[]): TweetGeoCollection {
    return {
      type: 'FeatureCollection',
      features: data.map(TweetMapper.mapToGeoObject)
    };
  }

  public static mapToGeoObject(data: Tweet): TweetGeoObject {
    return {
      type: 'Feature',
      geometry: data.location,
      properties: {
        username: data.username,
        message: data.tweet,
        datetime: TweetMapper.parseDate(data.datetime).toISOString(),
        sentiment: data.sentiment
      }
    };
  }

  public static mapToModels(data: Tweet[]): TweetModel[] {
    return data.map(TweetMapper.mapToModel);
  }

  public static mapToModel(data: Tweet): TweetModel {
    return ({
      username: data.username,
      message: data.tweet,
      datetime: TweetMapper.parseDate(data.datetime),
      location: new Point(data.location.coordinates[0], data.location.coordinates[1]),
      sentiment: data.sentiment
    });
  }

  // todo: consider to move this method to separate util class
  private static parseDate(data: string): Date {
    return new Date(Date.parse(data.replace(';', '')));
  }
}
