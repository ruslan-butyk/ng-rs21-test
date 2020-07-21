import { Point } from 'mapbox-gl';

import { TweetModel } from '../model/tweet.model';
import { Tweet } from '../model/tweet';

export class TweetMapper {
  public static mapToModels(data: Tweet[]): TweetModel[] {
    return data.map(TweetMapper.mapToModel);
  }

  public static mapToModel(data: Tweet): TweetModel {
    return ({
      username: data.username,
      message: data.tweet,
      datetime: new Date(Date.parse(data.datetime.replace(';', ''))),
      location: new Point(data.location.coordinates[0], data.location.coordinates[1])
    });
  }
}
