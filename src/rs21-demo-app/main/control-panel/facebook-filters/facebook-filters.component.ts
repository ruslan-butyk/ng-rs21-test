import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { BehaviorSubject, combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { map, startWith, withLatestFrom } from 'rxjs/operators';
import { without } from 'lodash';

import { PlacesTypeChanges } from '../../model/places-type-changes.interface';
import { FacebookFilterOutput } from '../../model/facebook-filter-output.interface';


@Component({
  selector: 'rs21-facebook-filters',
  templateUrl: './facebook-filters.component.html',
  styleUrls: ['./facebook-filters.component.scss']
})
/* TODO: rename FacebookFiltersComponent to FacebookFilterComponent and all related things (file names, etc)*/
export class FacebookFiltersComponent implements OnDestroy {
  // here places are meaning placeTypes
  public isChipRemovable = true;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public placesCtrl = new FormControl();
  public filteredPlaces$: Observable<string[]>;
  public selectedPlaces$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private filterSub: Subscription;
  private selectedPlaceChange$: Subject<PlacesTypeChanges> = new Subject();

  @Input() public placeTypes: string[] = [];
  @Output() public filterChanges: EventEmitter<FacebookFilterOutput> = new EventEmitter();

  @ViewChild('placeInput') public placeInput: ElementRef<HTMLInputElement>;
  @ViewChild('autocomplete') public matAutocomplete: MatAutocomplete;

  constructor() {
    this.initFilteredPlaces();
    this.filterSub = this.initSelectedPlaceChanges$()
      .subscribe((filterChanges: FacebookFilterOutput) => this.filterChanges.emit(filterChanges));
  }

  public removeChip(place: string): void {
    const selectedPlaces = this.selectedPlaces$.getValue();
    const index = selectedPlaces.indexOf(place);

    if (index >= 0) {
      selectedPlaces.splice(index, 1);
      this.selectedPlaces$.next(selectedPlaces);
      this.selectedPlaceChange$.next({removed: place});
    }
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const newPlace = event.option.value;
    const selectedPlaces = this.selectedPlaces$.getValue();
    selectedPlaces.push(newPlace);
    this.selectedPlaces$.next(selectedPlaces);
    this.selectedPlaceChange$.next({added: newPlace});
    this.placeInput.nativeElement.value = '';
    this.placesCtrl.setValue(null);
  }

  private filter(value: string, notSelectedPlaces: string[]): string[] {
    const filterValue = value && (typeof value === 'string') ? value.toLowerCase() : '';
    return filterValue
      ? notSelectedPlaces.filter((place: string) => place.toLowerCase().indexOf(filterValue) === 0)
      : notSelectedPlaces;
  }

  private initFilteredPlaces(): void {
    const notSelectedPlaces$: Observable<string[]> = this.selectedPlaces$.pipe(
      map((selectedPlaces: string[]) => without(this.placeTypes, ...selectedPlaces))
    );
    const searchedPlace$: Observable<string> = this.placesCtrl.valueChanges.pipe(
      startWith('')
    );
    this.filteredPlaces$ = combineLatest([searchedPlace$, notSelectedPlaces$]).pipe(
      map(([searchedPlace, notSelectedPlaces]: [string, string[]] ) => this.filter(searchedPlace, notSelectedPlaces)));
  }

  private initSelectedPlaceChanges$(): Observable<FacebookFilterOutput> {
    return  this.selectedPlaceChange$.pipe(
      startWith({}),
      withLatestFrom(this.selectedPlaces$),
      map(([placeTypeChanges, placeTypes]: [PlacesTypeChanges, string[]]) => ({placeTypes, placeTypeChanges}))
    );
  }

  public ngOnDestroy(): void {
    if (this.filterSub) {
      this.filterSub.unsubscribe();
    }
  }

}
