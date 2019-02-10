import { TestBed } from '@angular/core/testing';

import { ChannelService } from './channel.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ChannelService = TestBed.get(ChannelService);
    expect(service).toBeTruthy();
  });
});
