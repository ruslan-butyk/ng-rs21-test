import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /// default settings
  containerId = 'map';
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 35.10; // Albuquerque coords
  lng = -106.62;

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
