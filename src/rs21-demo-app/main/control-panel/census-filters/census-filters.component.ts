import { Component, OnInit } from '@angular/core';

enum Gender {
  All = 'all',
  Male = 'male',
  Female = 'female'
}

@Component({
  selector: 'rs21-census-filters',
  templateUrl: './census-filters.component.html',
  styleUrls: ['./census-filters.component.scss']
})
/* TODO: rename CensusFiltersComponent to CensusFilterComponent and all related things (file names, etc)*/
export class CensusFiltersComponent implements OnInit {
  public gender = Object.values(Gender);
  constructor() { }

  ngOnInit(): void {
  }

}
