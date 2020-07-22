import { Point } from 'mapbox-gl';

import { Place } from '../model/input/place';
import { PlaceModel } from '../model/place.model';
import { PlaceGeoCollection } from '../model/place-geo-collection.type';
import { PlaceGeoObject } from '../model/place-geo-object.type';

export class PlaceMapper {
  public static mapToGeoCollection(data: Place[]): PlaceGeoCollection {
    return {
      type: 'FeatureCollection',
      features: data.map(PlaceMapper.mapToGeoObject)
    };
  }

  public static mapToGeoObject(data: Place): PlaceGeoObject {
    return {
      type: 'Feature',
      geometry: data.location,
      properties: {
        name: data.place,
        type: data.type,
        checkins: data.checkins
      }
    };
  }

  public static mapToModels(data: Place[]): PlaceModel[] {
    return data.map(PlaceMapper.mapToModel);
  }

  public static mapToModel(data: Place): PlaceModel {
    return ({
      name: data.place,
      type: data.type,
      checkins: data.checkins,
      location: new Point(data.location.coordinates[0], data.location.coordinates[1])
    });
  }
}
