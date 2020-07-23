import { Place } from '../model/input/place';
import { PlaceGeoCollection } from '../model/place-geo-collection.type';
import { PlaceGeoObject } from '../model/place-geo-object.type';
import { PlaceMetaData } from '../model/place-meta-data.interface';
import { PlaceChartData } from '../model/place-chart-data.interface';

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

  public static mapToChartData(placeData: PlaceMetaData[]): PlaceChartData {
    const places: Partial<{}> = {};
    placeData.forEach(data => {
      const type: string = data.type;
      const prevNum = places[type] || 0;
      places[type] = prevNum + 1;
    });
    return  {types: Object.keys(places), nums: Object.values(places)};
  }
}
