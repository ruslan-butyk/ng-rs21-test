import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { without } from 'lodash';

interface PlaceType {
  id: number;
  name: string;
}

const placeTypes: PlaceType[] = [
  { id: 1, name: 'Local business' },
  { id: 2, name: 'Spas/beauty/personal care' },
  { id: 3, name: 'Restaurant/cafe' },
  { id: 4, name: 'Real estate' },
  { id: 5, name: 'Education' }
];

@Component({
  selector: 'rs21-facebook-filters',
  templateUrl: './facebook-filters.component.html',
  styleUrls: ['./facebook-filters.component.scss']
})
export class FacebookFiltersComponent {
  public isChipRemovable = true;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public placesCtrl = new FormControl();
  public filteredPlaces$: Observable<PlaceType[]>;
  public selectedPlaces$: BehaviorSubject<PlaceType[]> = new BehaviorSubject([]);
  public places: PlaceType[] = placeTypes;

  @ViewChild('placeInput') public placeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') public matAutocomplete: MatAutocomplete;

  constructor() {
    const notSelectedPlaces$: Observable<PlaceType[]> = this.selectedPlaces$.pipe(
      map((selectedPlaces: PlaceType[]) => without(this.places, ...selectedPlaces)),
      tap((val) => console.log(val))
    );
    const searchedPlace$: Observable<string> = this.placesCtrl.valueChanges.pipe(
      startWith('')
    );
    this.filteredPlaces$ = combineLatest([searchedPlace$, notSelectedPlaces$]).pipe(
      map(([searchedPlace, notSelectedPlaces]: [string, PlaceType[]] ) => this.filter(searchedPlace, notSelectedPlaces)));
  }

  public removeChip(place: PlaceType): void {
    const selectedPlaces = this.selectedPlaces$.getValue();
    const index = selectedPlaces.indexOf(place);

    if (index >= 0) {
      selectedPlaces.splice(index, 1);
      this.selectedPlaces$.next(selectedPlaces);
    }
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedPlaces = this.selectedPlaces$.getValue();
    selectedPlaces.push(event.option.value);
    this.selectedPlaces$.next(selectedPlaces);
    this.placeInput.nativeElement.value = '';
    this.placesCtrl.setValue(null);
  }

  private filter(value: string, notSelectedPlaces: PlaceType[]): PlaceType[] {
    const filterValue = value && (typeof value === 'string') ? value.toLowerCase() : '';
    return filterValue
      ? notSelectedPlaces.filter((place: PlaceType) => place.name.toLowerCase().indexOf(filterValue) === 0)
      : notSelectedPlaces;
  }

}
