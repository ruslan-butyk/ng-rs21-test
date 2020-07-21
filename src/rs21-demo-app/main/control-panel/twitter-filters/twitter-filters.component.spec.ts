import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterFiltersComponent } from './twitter-filters.component';

describe('TwitterFiltersComponent', () => {
  let component: TwitterFiltersComponent;
  let fixture: ComponentFixture<TwitterFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
