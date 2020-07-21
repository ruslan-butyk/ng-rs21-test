import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookFiltersComponent } from './facebook-filters.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('FacebookFiltersComponent', () => {
  let component: FacebookFiltersComponent;
  let fixture: ComponentFixture<FacebookFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatAutocompleteModule ],
      declarations: [ FacebookFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
