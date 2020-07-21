import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusFiltersComponent } from './census-filters.component';

describe('CensusFiltersComponent', () => {
  let component: CensusFiltersComponent;
  let fixture: ComponentFixture<CensusFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CensusFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
