import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GeoJSONSourceRaw, MapboxGeoJSONFeature, MapLayerMouseEvent } from 'mapbox-gl';
import { FacebookMetaData } from '../model/facebook-meta-data.interface';
import { FacebookGeoJson } from '../model/facebook-geo-json.type';
import { TwitterMetaData } from '../model/twitter-meta-data.interface';
import { get } from 'lodash';

@Component({
  selector: 'rs21-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges{
  public isFbPlacesImageLoaded = false;
  public isTwitterImageLoaded = false;
  public cursorStyle = '';
  public selectedPoint: MapboxGeoJSONFeature | null;

  @Input() public fbData: FacebookGeoJson | null;
  @Input() public twitterData: TwitterMetaData | null;

  public defaultConfig = {
    style: 'mapbox://styles/mapbox/streets-v9',
    lat: 37.0, // Albuquerque coords
    lng: -98.0,
    zoom: [4]
  };

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {
  }

  public onFbPlaceImageLoad(): void {
    this.isFbPlacesImageLoaded = true;
  }

  public onTwitterImageLoad(): void {
    this.isTwitterImageLoaded = true;
  }

  public onLayerClick(event: MapLayerMouseEvent): void {
    this.selectedPoint = get(event, 'features[0]');
  }

  public onPointEnter(): void {
    this.cursorStyle = 'pointer';
  }

  public onPointLeave(): void {
    this.cursorStyle = '';
  }

  public getLayerVisibility(data: FacebookGeoJson ): string {
    return data ? 'visible' : 'none';
  }

  public isPopupOpen(pointType: string): boolean {
    return get(this.selectedPoint, 'layer.id') === pointType;
  }
}
