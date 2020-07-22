import { Component, OnInit } from '@angular/core';

import { TwitterRestService } from './service/twitter-rest.service';
import { GeoJSONSourceRaw, Point } from 'mapbox-gl';
import { FacebookFilterOutput } from './model/facebook-filter-output.interface';
import { ConsoleLogger } from '@angular/compiler-cli/ngcc';
import { FacebookMetaData } from './model/facebook-meta-data.interface';
import { FacebookGeoJson } from './model/facebook-geo-json.type';
import { TwitterGeoJson } from './model/twitter-geo-json.type';
import { CensusFilterOutput } from './model/census-tilter-output.interface';
import { FB_DATA, PLACE_TYPES_DATA, TWITTER_DATA } from './mock-data';

@Component({
  selector: 'rs21-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public fbData: FacebookGeoJson | null = null;
  public placeTypesData: string[] = PLACE_TYPES_DATA;

  public twitterData: TwitterGeoJson | null = null;

  constructor(private twitter: TwitterRestService) { }

  ngOnInit(): void {
  }

  public onFbLayerDisableChange(isEnabled: boolean): void {
    this.fbData = isEnabled ? FB_DATA : null;
  }

  public onTwitterLayerDisableChange(isEnabled: boolean): void {
    this.twitterData = isEnabled ? TWITTER_DATA : null;
  }

  public onCensusLayerDisableChange(isEnabled: boolean): void {
    console.log('onCensusLayerDisableChange', isEnabled);
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
