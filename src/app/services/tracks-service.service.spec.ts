import { TestBed } from '@angular/core/testing';

import { TracksServiceService } from './tracks-service.service';

describe('TracksServiceService', () => {
  let service: TracksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
