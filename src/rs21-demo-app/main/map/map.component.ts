import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LngLat, MapboxGeoJSONFeature, MapLayerMouseEvent, Visibility } from 'mapbox-gl';
import { PlaceGeoCollection } from '../model/place-geo-collection.type';
import { get } from 'lodash';
import { TweetGeoCollection } from '../model/tweet-geo-collection.type';
import { CensusGeoCollection } from '../model/census-geo-collection.type';
import { TWEET_COLOR_MAP } from '../model/tweet-color.map';
import { TweetSentiment } from '../model/tweet-sentiment.enum';

@Component({
  selector: 'rs21-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  public readonly tweetSentiment = TweetSentiment;
  public readonly tweetColorMap = TWEET_COLOR_MAP;
  public isFbPlacesImageLoaded = false;
  public cursorStyle = '';
  public isLegendHidden = false;

  public selectedPoint: MapboxGeoJSONFeature | null;
  public currentPopupName: 'census' | 'twitter' | 'fbPlaces';
  public currentPopupLngLat: LngLat;

  @Input() public fbData: PlaceGeoCollection | null;
  @Input() public twitterData: TweetGeoCollection | null;
  @Input() public censusData: CensusGeoCollection | null;

  @Input() public fbLayerVisibility: Visibility = 'none';
  @Input() public twitterLayerVisibility: Visibility = 'none';
  @Input() public censusLayerVisibility: Visibility = 'none';

  public defaultConfig = {
    style: 'mapbox://styles/mapbox/streets-v9',
    lat: 35.10, // Albuquerque coords
    lng: -106.62,
    zoom: [11],
    trackResize: true
  };

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.censusLayerVisibility && this.censusLayerVisibility === 'visible') {
      this.isLegendHidden = false;
    }
  }

  public onFbPlaceImageLoad(): void {
    this.isFbPlacesImageLoaded = true;
  }

  public onLayerClick(event: MapLayerMouseEvent): void {
    this.selectedPoint = get(event, 'features[0]');
    this.currentPopupName = get(this.selectedPoint, 'layer.id');
    this.currentPopupLngLat = get(event, 'lngLat');
  }

  public onPointEnter(): void {
    this.cursorStyle = 'pointer';
  }

  public onPointLeave(): void {
    this.cursorStyle = '';
  }

  public isPopupOpen(pointType: string): boolean {
    return this.currentPopupName === pointType;
  }

  public toggleLegend(): void {
    this.isLegendHidden = !this.isLegendHidden;
  }
}
