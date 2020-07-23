import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { MainComponent } from './main.component';
import { FacebookRestService } from './service/facebook-rest.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let facebookMock: any;

  beforeEach(async(() => {
    facebookMock = jasmine.createSpyObj('FacebookRestService', ['getPlaceTypes']);
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [HttpClientModule],
      providers: [ { provide: FacebookRestService, useValue: facebookMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    facebookMock.getPlaceTypes.and.callFake(() => of([]));
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
