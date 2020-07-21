import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TwitterRestService } from './twitter-rest.service';

describe('TwitterService', () => {
  let service: TwitterRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TwitterRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
