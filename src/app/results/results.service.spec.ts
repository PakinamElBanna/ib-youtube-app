import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';
import { HttpClientModule } from '@angular/common/http';

describe('ResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ResultsService = TestBed.get(ResultsService);
    expect(service).toBeTruthy();
  });
});
