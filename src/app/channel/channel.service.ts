import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../services/data.service';
import { Channel } from './channel/channel.model';
import { Result } from '../results/results/result.model';
import { ResultsService } from '../results/results.service';

@Injectable({
  providedIn: "root"
})
export class ChannelService {
  channel: Channel;
  results: Result;

  channelChanged = new Subject<Channel>();

  constructor(
    private dataService: DataService,
    private resultsService: ResultsService
  ) {}

  getChannel(id) {
    this.dataService.fetchChannel(id).subscribe((response: any) => {
      this.setChannel(response.items[0]);
    });
    this.getRelatedVideos(id);
  }

  setChannel(channel: any) {
    this.channel = new Channel(channel);
    this.channelChanged.next(this.channel);
  }

  getRelatedVideos(id) {
    const query = {channelId: ''}
    query.channelId = id.id;
    this.resultsService.searchYoutube(query);
  }
}
