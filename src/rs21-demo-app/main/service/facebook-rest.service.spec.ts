import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FacebookRestService } from './facebook-rest.service';

describe('FacebookRestService', () => {
  let service: FacebookRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FacebookRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
