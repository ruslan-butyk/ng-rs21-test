import { Component, OnInit } from '@angular/core';

import { TwitterRestService } from './service/twitter-rest.service';
import { GeoJSONSourceRaw, Point } from 'mapbox-gl';
import { FacebookFilterOutput } from './model/facebook-filter-output.interface';
import { ConsoleLogger } from '@angular/compiler-cli/ngcc';
import { FacebookMetaData } from './model/facebook-meta-data.interface';
import { FacebookGeoJson } from './model/facebook-geo-json.type';
import { TwitterGeoJson } from './model/twitter-geo-json.type';

const fbData: FacebookGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-106.62, 35.10]
      },
      properties: {
        place: 'Planet Fitness - Albuquerque, Gibson, NM',
        type: 'Sports/recreation/activities',
        checkins: 2911,
      }
    }
  ]
};

const twitterData: TwitterGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-101.62, 34.10]
      },
      properties: {
        username: 'TrapShawtyyy',
        tweet: 'Yoooo that stripped shirt makes my boobs look all big ',
        datetime: '2014-10-30T22:10:36'
      }
    }
  ]
};


const placeTypesData: string[] = [
  'Local business',
  'Spas/beauty/personal care',
  'Restaurant/cafe',
  'Real estate',
  'Education'
];

@Component({
  selector: 'rs21-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public fbData: FacebookGeoJson | null = null;
  public placeTypesData: string[] = placeTypesData;

  public twitterData: TwitterGeoJson | null = null;

  constructor(private twitter: TwitterRestService) { }

  ngOnInit(): void {
  }

  public onFbLayerDisableChange(isEnabled: boolean): void {
    this.fbData = isEnabled ? fbData : null;
  }

  public onTwitterLayerDisableChange(isEnabled: boolean): void {
    this.twitterData = isEnabled ? twitterData : null;
  }

  public onFbFilterChange(data: FacebookFilterOutput): void {
    console.log('MainComponent receives FacebookFilterOutput', data);
    // TODO: fetch Facebook data here
  }

}
