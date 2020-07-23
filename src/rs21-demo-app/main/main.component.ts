import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FeatureCollection } from 'geojson';

import { TwitterRestService } from './service/twitter-rest.service';
import { FacebookRestService } from './service/facebook-rest.service';
import { CensusRestService } from './service/census-rest.service';
import { FacebookFilterOutput } from './model/facebook-filter-output.interface';
import { PlaceGeoCollection } from './model/place-geo-collection.type';
import { TweetGeoCollection } from './model/tweet-geo-collection.type';
import { CensusFilterOutput } from './model/census-tilter-output.interface';
import { Visibility } from 'mapbox-gl';

const DUMMY_GEO_JSON: GeoJSON.FeatureCollection<any, any> = Object.freeze({
  type: 'FeatureCollection',
  features: [],
});

@Component({
  selector: 'rs21-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public fbData: PlaceGeoCollection | null = null;
  public fbFilter: FacebookFilterOutput;
  public isFbLayerVisible: Visibility = 'none';

  public placeTypesData: string[] = [];

  public twitterData: TweetGeoCollection | null = null;
  public censusData: FeatureCollection | null = null;
  public isTwitterLayerVisible: Visibility = 'none';


  constructor(
    private twitter: TwitterRestService,
    private facebook: FacebookRestService,
    private census: CensusRestService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initPlaceTypesData();
  }

  public onFbLayerDisableChange(isEnabled: boolean): void {
    this.isFbLayerVisible = this.getVisibility(isEnabled);
    if (!this.fbData && this.fbFilter && this.fbFilter.placeTypes){
      const placeTypes: string = this.fbFilter.placeTypes.join(',');
      this.fetchFbData(placeTypes);
    }
  }

  public onTwitterLayerDisableChange(isEnabled: boolean): void {
    this.isTwitterLayerVisible = this.getVisibility(isEnabled);
    if (!this.twitterData) {
      this.twitter.getGeoCollection().subscribe((data: TweetGeoCollection) => {
        this.twitterData = data;
        this.cd.markForCheck();
      });
    }
  }

  public onCensusLayerDisableChange(isEnabled: boolean): void {
    // todo
    if (isEnabled) {
      this.census.getGeoCollection().subscribe(data => this.censusData = data);
    } else {
      this.censusData = null;
    }
  }

  public onFbFilterChange(filterData: FacebookFilterOutput): void {
    this.fbFilter = filterData;
    this.fetchFbData(filterData.placeTypes.join(','));
  }

  public onCensusFilterChange(data: CensusFilterOutput): void {
    console.log('MainComponent receives CensusFilterOutput', data);
    // TODO: fetch Census data here
  }

  private fetchFbData(type: string): void {
    if (type.length) {
      this.facebook.getGeoCollection({type}).subscribe((data: PlaceGeoCollection) => {
        this.fbData = data;
        this.cd.markForCheck();
      });
    } else {
      this.fbData = DUMMY_GEO_JSON;
    }
  }

  private initPlaceTypesData(): void {
    this.facebook.getPlaceTypes().subscribe((data: string[]) => {
      this.placeTypesData = data;
    });
  }

  private getVisibility(isEnabled: boolean): Visibility {
    return isEnabled ? 'visible' : 'none';
  }
}
