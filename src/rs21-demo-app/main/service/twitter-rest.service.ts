import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestService } from './rest.service';
import { TweetModel } from '../model/tweet.model';
import { TweetMapper } from '../util/tweet.mapper';
import { Tweet } from '../model/tweet';

export interface TwitSearchParams {
  username?: string;
  query?: string;
  lat?: number;
  lon?: number;
  dist?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TwitterRestService extends RestService {
  private static END_POINT = 'twitter';

  constructor(private http: HttpClient) {
    super(TwitterRestService.END_POINT);
  }

  public get(searchParams: TwitSearchParams = {}): Observable<TweetModel[]> {
    let params = new HttpParams();
    Object.keys(searchParams)
      .filter(Boolean)
      .forEach(key => params = params.set(key, searchParams[key]));
    return this.http.get<Tweet[]>(this.url, {params})
      .pipe(
        map(TweetMapper.mapToModels)
      );
  }
}
