import { TestBed } from '@angular/core/testing';

import { WorldCupMatchesService } from './world-cup-matches.service';

describe('WorldCupMatchesService', () => {
  let service: WorldCupMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldCupMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
