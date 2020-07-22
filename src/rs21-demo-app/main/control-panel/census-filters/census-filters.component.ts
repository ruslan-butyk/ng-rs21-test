import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gender } from '../../model/gender.enum';
import { CensusFilterOutput } from '../../model/census-tilter-output.interface';

@Component({
  selector: 'rs21-census-filters',
  templateUrl: './census-filters.component.html',
  styleUrls: ['./census-filters.component.scss']
})
/* TODO: rename CensusFiltersComponent to CensusFilterComponent and all related things (file names, etc)*/
export class CensusFiltersComponent implements OnInit {
  public sliderConfig = {
    minAge: 10,
    maxAge: 120,
    step: 5
  };
  public genderList = Object.values(Gender);
  public selectedGender: Gender = Gender.All;
  public ageMin: number = this.sliderConfig.minAge;
  public ageMax: number = this.sliderConfig.maxAge;

  @Output() public filterChanges: EventEmitter<CensusFilterOutput> = new EventEmitter();

  public onFilterChange(): void {
    this.filterChanges.emit({
      gender: this.selectedGender,
      ageMin: this.ageMin,
      ageMax: this.ageMax
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
