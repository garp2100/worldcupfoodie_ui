import { TestBed } from '@angular/core/testing';

import { DishCrudService } from './dish-crud.service';

describe('DishCrudService', () => {
  let service: DishCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
