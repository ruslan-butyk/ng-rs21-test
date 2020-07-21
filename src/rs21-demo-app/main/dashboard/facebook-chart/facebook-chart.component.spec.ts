import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookChartComponent } from './facebook-chart.component';

describe('FacebookChartComponent', () => {
  let component: FacebookChartComponent;
  let fixture: ComponentFixture<FacebookChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
