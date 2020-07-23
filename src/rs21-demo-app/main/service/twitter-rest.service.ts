import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RestService, SearchParams } from './rest.service';
import { TweetMapper } from '../util/tweet.mapper';
import { Tweet } from '../model/input/tweet';
import { TweetGeoCollection } from '../model/tweet-geo-collection.type';
import { TweetSentiment } from '../model/tweet-sentiment.enum';

export interface TwitSearchParams extends SearchParams {
  username?: string;
  query?: string;
  lat?: number;
  lon?: number;
  dist?: number;
  sentiment?: TweetSentiment;
}

@Injectable({
  providedIn: 'root'
})
export class TwitterRestService extends RestService {
  private static END_POINT = 'twitter';

  constructor(http: HttpClient) {
    super(TwitterRestService.END_POINT, http);
  }

  public getGeoCollection(searchParams: TwitSearchParams = {}): Observable<TweetGeoCollection> {
    return this.get<Tweet, TwitSearchParams>(searchParams, TweetMapper.mapToGeoCollection);
  }
}
