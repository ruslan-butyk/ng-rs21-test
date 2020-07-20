import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Rs21DemoAppComponent } from './rs21-demo-app.component';

describe('Rs21DemoAppComponent', () => {
  let fixture: ComponentFixture<Rs21DemoAppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Rs21DemoAppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(Rs21DemoAppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
