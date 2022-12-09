import { TestBed } from '@angular/core/testing';

import { WorldCupMealsService } from './world-cup-meals.service';

describe('WorldCupMealsService', () => {
  let service: WorldCupMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldCupMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
