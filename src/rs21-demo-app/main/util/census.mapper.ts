import { FeatureCollection, Feature } from 'geojson';
import { Census } from '../model/input/census';

export class CensusMapper {
  public static mapToGeoCollection(data: Census[]): FeatureCollection {
    return {
      type: 'FeatureCollection',
      features: CensusMapper.mapToGeoObjects(data)
    };
  }

  public static mapToGeoObjects(data: Census[]): Feature[] {
    return data.map(CensusMapper.mapToGeoObject);
  }

  public static mapToGeoObject(data: Census): Feature {
    return {
      type: 'Feature',
      geometry: data.geometry,
      properties: data.properties
    };
  }
}
