import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterChartComponent } from './twitter-chart.component';

describe('TwitterChartComponent', () => {
  let component: TwitterChartComponent;
  let fixture: ComponentFixture<TwitterChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
