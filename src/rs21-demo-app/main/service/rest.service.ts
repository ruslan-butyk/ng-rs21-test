import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

export interface SearchParams {
  [param: string]: string | number;
}

export abstract class RestService {
  private readonly api = environment.http.api;
  protected readonly url: string;

  constructor(endPoint: string, protected http: HttpClient) {
    this.url = this.buildUrl(endPoint);
  }

  protected get<T, P = SearchParams>(searchParams: P, mapperFn: (data: T[]) => any): Observable<any> {
    const params = this.buildSearchParams(searchParams);
    return this.http.get<T[]>(this.url, {params})
      .pipe(
        map(mapperFn),
        first()
      );
  }

  protected buildUrl(endPoint: string): string {
    return `/${this.api}/${endPoint}`;
  }

  protected buildSearchParams<P = SearchParams>(searchParams: P): HttpParams {
    let params = new HttpParams();
    Object.keys(searchParams)
      .filter(Boolean)
      .forEach(key => params = params.set(key, searchParams[key]));
    return params;
  }
}
