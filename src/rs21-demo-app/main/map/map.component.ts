import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MapboxGeoJSONFeature, MapLayerMouseEvent } from 'mapbox-gl';
import { PlaceGeoCollection } from '../model/place-geo-collection.type';
import { get } from 'lodash';
import { FeatureCollection } from 'geojson';
import { TweetGeoCollection } from '../model/tweet-geo-collection.type';

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

  @Input() public fbData: PlaceGeoCollection | null;
  @Input() public twitterData: TweetGeoCollection | null;
  @Input() public censusData: FeatureCollection | null;

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

  public getLayerVisibility(data: FeatureCollection ): string {
    return data ? 'visible' : 'none';
  }

  public isPopupOpen(pointType: string): boolean {
    return get(this.selectedPoint, 'layer.id') === pointType;
  }
}
