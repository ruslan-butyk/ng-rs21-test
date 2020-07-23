import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestService, SearchParams } from './rest.service';
import { CensusGeometry } from '../model/input/census-geometry';
import { CensusData } from '../model/input/census-data';
import { CensusMapper } from '../util/census.mapper';
import { CensusGeoCollection } from '../model/census-geo-collection.type';
import { CensusMetaData } from '../model/census-meta-data.interface';

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

  public getCensusData(searchParams: CensusSearchParams = {}): Observable<CensusMetaData[]> {
    const params = this.buildSearchParams(searchParams);
    return this.http.get<CensusData>(this.url, {params})
      .pipe(
        map(CensusMapper.mapToMetaData)
      );
  }

  public getGeoCollection(): Observable<CensusGeoCollection> {
    return this.http.get<CensusGeometry[]>(this.buildUrl(CensusRestService.END_POINT_GEOMETRY))
      .pipe(
        map(CensusMapper.mapToGeoCollection)
      );
  }
}
