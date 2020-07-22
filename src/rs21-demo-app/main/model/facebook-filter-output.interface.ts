import { PlacesTypeChanges } from './places-type-changes.interface';

export interface FacebookFilterOutput {
  placeTypes: string[];
  placeTypeChanges: PlacesTypeChanges;
}
