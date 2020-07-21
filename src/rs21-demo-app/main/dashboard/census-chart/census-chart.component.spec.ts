import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusChartComponent } from './census-chart.component';

describe('CensusChartComponent', () => {
  let component: CensusChartComponent;
  let fixture: ComponentFixture<CensusChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CensusChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
