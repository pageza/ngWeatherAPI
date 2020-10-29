import { TestBed } from '@angular/core/testing';

import { CityscapeService } from './cityscape.service';

describe('CityscapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityscapeService = TestBed.get(CityscapeService);
    expect(service).toBeTruthy();
  });
});
