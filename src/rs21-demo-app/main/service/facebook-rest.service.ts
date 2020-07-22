import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RestService, SearchParams } from './rest.service';
import { Place } from '../model/input/place';
import { PlaceModel } from '../model/place.model';
import { PlaceMapper } from '../util/place.mapper';
import { PlaceGeoCollection } from '../model/place-geo-collection.type';
import { PlaceTypes } from '../model/input/place-types';

export interface FacebookSearchParams extends SearchParams {
  query?: string;
  type?: string;
  lat?: number;
  lon?: number;
  dist?: number;
}

@Injectable({
  providedIn: 'root'
})
export class FacebookRestService extends RestService {
  private static END_POINT = 'facebook';

  constructor(http: HttpClient) {
    super(FacebookRestService.END_POINT, http);
  }

  public getPlaceTypes(): Observable<string[]> {
    return this.http.get<PlaceTypes>(this.buildUrl('facebook_type_places'))
      .pipe(
        map(data => data.all_types)
      );
  }

  public getPlaces(searchParams: FacebookSearchParams = {}): Observable<PlaceModel[]> {
    return this.get<Place, FacebookSearchParams>(searchParams, PlaceMapper.mapToModels);
  }

  public getGeoCollection(searchParams: FacebookSearchParams = {}): Observable<PlaceGeoCollection> {
    return this.get<Place, FacebookSearchParams>(searchParams, PlaceMapper.mapToGeoCollection);
  }
}
