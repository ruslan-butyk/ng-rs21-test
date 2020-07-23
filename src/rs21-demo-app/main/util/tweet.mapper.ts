import { Tweet } from '../model/input/tweet';
import { TweetGeoCollection } from '../model/tweet-geo-collection.type';
import { TweetGeoObject } from '../model/tweet-geo-object.type';
import { TweetMetaData } from '../model/tweet-meta-data.interface';
import { TweetChartData } from '../model/tweet-chart-data.interface';
import { TweetSentiment } from '../model/tweet-sentiment.enum';

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

  public static mapToChartData(twitterData: TweetMetaData[]): TweetChartData {
    const sentimentMap: Partial<{}> = {};
    twitterData.forEach(data => {
      const sentiment: number = data.sentiment;
      const prevSentiment: number = sentimentMap[sentiment] || 0;
      sentimentMap[sentiment] = prevSentiment + 1;
    });
    const labels = Object.keys(sentimentMap).map(key => TweetSentiment[key]);
    return {labels, nums: Object.values(sentimentMap)};
  }

  // todo: consider to move this method to separate util class
  private static parseDate(data: string): Date {
    return new Date(Date.parse(data.replace(';', '')));
  }
}
