import { Component, OnInit } from '@angular/core';
import { FeatureCollection } from 'geojson';

import { TwitterRestService } from './service/twitter-rest.service';
import { FacebookRestService } from './service/facebook-rest.service';
import { CensusRestService } from './service/census-rest.service';
import { FacebookFilterOutput } from './model/facebook-filter-output.interface';
import { PlaceGeoCollection } from './model/place-geo-collection.type';
import { TweetGeoCollection } from './model/tweet-geo-collection.type';
import { CensusFilterOutput } from './model/census-tilter-output.interface';
import { PLACE_TYPES_DATA } from './mock-data';

@Component({
  selector: 'rs21-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public fbData: PlaceGeoCollection | null = null;
  public placeTypesData: string[] = PLACE_TYPES_DATA;

  public twitterData: TweetGeoCollection | null = null;
  public censusData: FeatureCollection | null = null;

  constructor(
    private twitter: TwitterRestService,
    private facebook: FacebookRestService,
    private census: CensusRestService
  ) { }

  ngOnInit(): void {
  }

  public onFbLayerDisableChange(isEnabled: boolean): void {
    // todo
    if (isEnabled) {
      this.facebook.getGeoCollection().subscribe(data => this.fbData = data);
    } else {
      this.fbData = null;
    }
  }

  public onTwitterLayerDisableChange(isEnabled: boolean): void {
    // todo
    if (isEnabled) {
      this.twitter.getGeoCollection().subscribe(data => this.twitterData = data);
    } else {
      this.twitterData = null;
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

  public onFbFilterChange(data: FacebookFilterOutput): void {
    console.log('MainComponent receives FacebookFilterOutput', data);
    // TODO: fetch Facebook data here
  }

  public onCensusFilterChange(data: CensusFilterOutput): void {
    console.log('MainComponent receives CensusFilterOutput', data);
    // TODO: fetch Census data here
  }
}
