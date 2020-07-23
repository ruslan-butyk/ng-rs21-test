import { FeatureCollection, Feature } from 'geojson';

import { CensusGeometry } from '../model/input/census-geometry';

export class CensusMapper {
  public static mapToGeoCollection(data: CensusGeometry[]): FeatureCollection {
    return {
      type: 'FeatureCollection',
      features: CensusMapper.mapToGeoObjects(data)
    };
  }

  public static mapToGeoObjects(data: CensusGeometry[]): Feature[] {
    return data.map(CensusMapper.mapToGeoObject);
  }

  public static mapToGeoObject(data: CensusGeometry): Feature {
    return {
      id: data.GEOID,
      type: 'Feature',
      geometry: data.geometry,
      properties: {}
    };
  }
}
