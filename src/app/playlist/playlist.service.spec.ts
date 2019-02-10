import { TestBed } from '@angular/core/testing';

import { PlaylistService } from './playlist.service';
import { HttpClientModule } from '@angular/common/http';

describe('PlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: PlaylistService = TestBed.get(PlaylistService);
    expect(service).toBeTruthy();
  });
});
