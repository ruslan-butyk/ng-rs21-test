import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MapboxGeoJSONFeature, MapLayerMouseEvent, Visibility } from 'mapbox-gl';
import { PlaceGeoCollection } from '../model/place-geo-collection.type';
import { get } from 'lodash';
import { FeatureCollection } from 'geojson';
import { TweetGeoCollection } from '../model/tweet-geo-collection.type';
import { CensusGeoCollection } from '../model/census-geo-collection.type';

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
  @Input() public censusData: CensusGeoCollection | null;

  @Input() public isFbLayerVisible: Visibility = 'none';
  @Input() public isTwitterLayerVisible: Visibility = 'none';

  public defaultConfig = {
    style: 'mapbox://styles/mapbox/streets-v9',
    lat: 35.10, // Albuquerque coords
    lng: -106.62,
    zoom: [11]
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

  public isPopupOpen(pointType: string): boolean {
    return get(this.selectedPoint, 'layer.id') === pointType;
  }
}
