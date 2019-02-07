import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChannelService } from '../channel.service';
import { Channel } from './channel.model';
import { ResultsService } from '../../results/results.service';
import { Result } from '../../results/results/result.model';

@Component({
  selector: "app-channel",
  templateUrl: "./channel.component.html",
  styleUrls: ["./channel.component.scss"]
})
export class ChannelComponent implements OnInit, OnDestroy {
  channel: Channel;
  results: Result;
  channelQuery = { id: null };
  resultsQuery = { channelId: null };

  constructor(
    private route: ActivatedRoute,
    private resultsService: ResultsService,
    private channelService: ChannelService
  ) {
    this.route.paramMap.subscribe((params: Params) => {
      this.channelQuery.id = this.route.snapshot.params.id;
      this.channelService.getChannel(this.channelQuery);
      this.resultsQuery.channelId = this.channelQuery.id;
      this.resultsService.searchYoutube(this.resultsQuery);
    });
  }

  ngOnInit() {
    this.channelService.channelChanged.subscribe((channel: Channel) => {
      this.resultsService.searchYoutube(this.resultsQuery);
      this.channel = channel;
    });

    this.resultsService.resultsChanged.subscribe((results: Result) => {
      this.results = new Result(results);
    });
  }

  ngOnDestroy() {
    // this.channelService.channelChanged.unsubscribe();
  }
}
