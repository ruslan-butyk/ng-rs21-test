import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureCollection } from 'geojson';

import { RestService, SearchParams } from './rest.service';
import { Census } from '../model/input/census';
import { CensusMapper } from '../util/census.mapper';

// Todo: update this interface after back-end update
export interface CensusSearchParams extends SearchParams {
  lat?: number;
  lon?: number;
  dist?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CensusRestService extends RestService {
  private static END_POINT = 'bernallio';

  constructor(http: HttpClient) {
    super(CensusRestService.END_POINT, http);
  }

  public getGeoCollection(searchParams: CensusSearchParams = {}): Observable<FeatureCollection> {
    return super.get<Census, CensusSearchParams>(searchParams, CensusMapper.mapToGeoCollection);
  }
}
