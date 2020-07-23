import { CensusGeometry } from '../model/input/census-geometry';
import { CensusGeoObject } from '../model/census-geo-object.type';
import { CensusGeoCollection } from '../model/census-geo-collection.type';
import { CensusMetaData } from '../model/census-meta-data.interface';
import { CensusCategory, CensusData, CensusFilter } from '../model/input/census-data';

export class CensusMapper {
  private static ID_JOINT = '_with_ann_';
  public static mapToGeoCollection(data: CensusGeometry[]): CensusGeoCollection {
    return {
      type: 'FeatureCollection',
      features: CensusMapper.mapToGeoObjects(data)
    };
  }

  public static mapToGeoObjects(data: CensusGeometry[]): CensusGeoObject[] {
    return data.map(CensusMapper.mapToGeoObject);
  }

  public static mapToGeoObject(data: CensusGeometry): CensusGeoObject {
    return {
      id: data.GEOID,
      type: 'Feature',
      geometry: data.geometry,
      properties: undefined // Should be loaded separately
    };
  }

  public static mapToMetaData(data: CensusData): CensusMetaData[] {
    // Prepare category map for fast access
    const categoryMap = new Map<string, CensusCategory>();
    data.categories.forEach(item => categoryMap.set(item.category, item));
    // Mapping itself
    return data.filter.map((item: CensusFilter) => {
      const metaData: CensusMetaData = { citizen: 0, geoid: undefined };
      metaData.geoid = item.GEOID;
      Object.keys(item)
        .forEach(key => {
          const categoryName = key.slice(key.lastIndexOf(CensusMapper.ID_JOINT) + CensusMapper.ID_JOINT.length);
          const category: CensusCategory | undefined = categoryMap.get(categoryName);
          if (!category) {
            return;
          }
          if (category.subtype.toLowerCase() !== 'estimate') {
            return;
          }
          metaData.citizen += +item[key];
        });
      return metaData;
    });
  }
}
