import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { cloneDeep } from 'lodash';
import { Visibility } from 'mapbox-gl';
import { Feature, Polygon } from 'geojson';

import { TwitterRestService } from './service/twitter-rest.service';
import { FacebookRestService } from './service/facebook-rest.service';
import { CensusRestService, CensusSearchParams } from './service/census-rest.service';
import { FacebookFilterOutput } from './model/facebook-filter-output.interface';
import { PlaceGeoCollection } from './model/place-geo-collection.type';
import { TweetGeoCollection } from './model/tweet-geo-collection.type';
import { CensusFilterOutput } from './model/census-tilter-output.interface';
import { CensusGeoCollection } from './model/census-geo-collection.type';
import { CensusGeoObject } from './model/census-geo-object.type';
import { PlaceMetaData } from './model/place-meta-data.interface';
import { TweetMetaData } from './model/tweet-meta-data.interface';
import { CensusMetaData } from './model/census-meta-data.interface';
import { Gender } from './model/gender.enum';
import { MatDrawer } from '@angular/material/sidenav';

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
export class MainComponent implements OnInit, AfterViewInit{
  public isControlPanelOpen = false;

  public fbData: PlaceGeoCollection | null = null;
  public fbMetaData: PlaceMetaData[] = [];
  public fbFilter: FacebookFilterOutput;
  public fbLayerVisibility: Visibility = 'none';

  public placeTypesData: string[] = [];

  public twitterData: TweetGeoCollection | null = null;
  public twitterMetaData: TweetMetaData[] = [];
  public twitterLayerVisibility: Visibility = 'none';

  public censusData: CensusGeoCollection | null = null;
  public censusMetaData: CensusMetaData[] = [];
  public censusFilter: CensusFilterOutput;
  public censusLayerVisibility: Visibility = 'none';

  @ViewChild('controlPanelSide', {static: true}) public controlPanelSide: MatDrawer;
  @ViewChild('dashboardSide', {static: true}) public dashboardSide: MatDrawer;

  // GEOID => GeoObject
  private censusDataMap: Map<string | number, CensusGeoObject> = new Map();

  constructor(
    private readonly twitter: TwitterRestService,
    private readonly facebook: FacebookRestService,
    private readonly census: CensusRestService,
    private readonly cd: ChangeDetectorRef,
    private readonly platform: Platform
  ) { }

  public ngOnInit(): void {
    this.initPlaceTypesData();
  }

  public ngAfterViewInit(): void {
    if (!this.isMobileDevice()) {
      this.isControlPanelOpen = true;
    }
  }

  public onFbLayerDisableChange(isEnabled: boolean): void {
    this.fbLayerVisibility = this.getVisibility(isEnabled);
    if (!this.fbData && this.fbFilter && this.fbFilter.placeTypes){
      const placeTypes: string = this.fbFilter.placeTypes.join(',');
      this.fetchFbData(placeTypes);
    }
  }

  public onFbFilterChange(filterData: FacebookFilterOutput): void {
    this.fbFilter = filterData;
    this.fetchFbData(filterData.placeTypes.join(','));
  }

  public onTwitterLayerDisableChange(isEnabled: boolean): void {
    this.twitterLayerVisibility = this.getVisibility(isEnabled);
    if (!this.twitterData) {
      this.twitter.getGeoCollection().subscribe((data: TweetGeoCollection) => {
        this.twitterData = data;
        this.twitterMetaData = this.twitterData.features.map(item => item.properties);
        this.cd.markForCheck();
      });
    }
    this.twitterMetaData = (isEnabled && this.twitterData) ? this.twitterData.features.map(item => item.properties) : [];
  }

  public onCensusLayerDisableChange(isEnabled: boolean): void {
    this.censusLayerVisibility = this.getVisibility(isEnabled);
    if (!this.censusData) {
      this.census.getGeoCollection().subscribe((geo: CensusGeoCollection) => {
        geo.features.forEach((item: Feature<Polygon, any>) => this.censusDataMap.set(item.id, item));
        this.fetchCensusData();
      });
    }
    this.censusMetaData = (isEnabled && this.censusData) ? this.censusData.features.map(item => item.properties) : [];
  }

  public onCensusFilterChange(filterData: CensusFilterOutput): void {
    this.censusFilter = filterData;
    this.fetchCensusData(filterData);
  }

  private fetchFbData(type: string): void {
    if (type.length) {
      this.facebook.getGeoCollection({type}).subscribe((data: PlaceGeoCollection) => {
        this.fbData = data;
        this.fbMetaData = data.features.map(item => item.properties);
        this.cd.markForCheck();
      });
    } else {
      this.fbData = cloneDeep(DUMMY_GEO_JSON);
      this.fbMetaData = [];
    }
  }

  private fetchCensusData(filterData?: CensusFilterOutput): void {
    const searchParams: CensusSearchParams = filterData ?
      {agemin: filterData.ageMin, agemax: filterData.ageMax, gender: filterData.gender} :
      {agemin: 10, agemax: 120, gender: Gender.All};

    this.census.getCensusData(searchParams)
      .subscribe((metaDataSet: CensusMetaData[]) => {
        const geo = cloneDeep(DUMMY_GEO_JSON);
        metaDataSet.forEach((metaData: CensusMetaData) => {
          const feature: CensusGeoObject | undefined = this.censusDataMap.get(metaData.geoid);
          if (feature) {
            feature.properties = metaData;
            geo.features.push(feature);
          }
        });
        this.censusMetaData = metaDataSet;
        this.censusData = geo;
        this.cd.markForCheck();
      });
  }

  private initPlaceTypesData(): void {
    this.facebook.getPlaceTypes().subscribe((data: string[]) => {
      this.placeTypesData = data;
    });
  }

  private getVisibility(isEnabled: boolean): Visibility {
    return isEnabled ? 'visible' : 'none';
  }

  private isMobileDevice(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }

  public onControlPanelOpenedStart(): void {
    if (this.isMobileDevice()) {
      this.dashboardSide.close();
    }
  }

  public onDashBoardOpenedStart(): void {
    if (this.isMobileDevice()) {
      this.controlPanelSide.close();
    }
  }
}
