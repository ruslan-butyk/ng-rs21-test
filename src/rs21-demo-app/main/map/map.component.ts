import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'rs21-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // default settings
  public containerId = 'map';
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/outdoors-v9';
  public lat = 35.10; // Albuquerque coords
  public lng = -106.62;

  constructor() {
  }

  public ngOnInit(): void {
    this.map = new mapboxgl.Map({
      container: this.containerId,
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat],
      accessToken: environment.mapbox.accessToken
    });
  }

}
