import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rs21-twitter-filters',
  templateUrl: './twitter-filters.component.html',
  styleUrls: ['./twitter-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/* TODO: rename TwitterFiltersComponent to TwitterFilterComponent and all related things (file names, etc)*/
export class TwitterFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
