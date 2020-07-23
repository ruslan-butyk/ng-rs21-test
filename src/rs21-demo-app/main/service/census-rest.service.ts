import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeatureCollection } from 'geojson';

import { RestService, SearchParams } from './rest.service';
import { CensusGeometry } from '../model/input/census-geometry';
import { CensusMapper } from '../util/census.mapper';

export interface CensusSearchParams extends SearchParams {
  agemin?: number;
  agemax?: number;
  gender?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CensusRestService extends RestService {
  private static END_POINT_BERNALLIO = 'bernallio';
  private static END_POINT_GEOMETRY = 'geometries';

  constructor(http: HttpClient) {
    super(CensusRestService.END_POINT_BERNALLIO, http);
  }

  // public getCensusData(params: CensusSearchParams): Observable<> {
  //   return this.get<, CensusSearchParams>(params, );
  // }

  public getGeoCollection(): Observable<FeatureCollection> {
    return this.http.get<CensusGeometry[]>(this.buildUrl(CensusRestService.END_POINT_GEOMETRY))
      .pipe(
        map(CensusMapper.mapToGeoCollection)
      );
  }
}
