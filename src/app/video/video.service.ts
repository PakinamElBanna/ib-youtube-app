import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DataService } from "../services/data.service";
import { Subject } from 'rxjs';
import { Video } from './video/video.model';
import { ResultsService } from '../results/results.service';

@Injectable({
  providedIn: "root"
})
export class VideoService {
  video: Video;
  videoChanged = new Subject<Video>();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private resultsService: ResultsService
  ) {}

  getVideo(query) {
    this.dataService.fetchVideo(query).subscribe((response: any) => {
      this.setVideo(response.items[0]);
    });
  }

  setVideo(video) {
    debugger
    this.video = new Video(video);
    this.videoChanged.next(this.video);
  }

  getRelatedVideos(query) {
    this.dataService.fetchVideos(query).subscribe((response: any) => {
      this.resultsService.resultsChanged.next(response.items);
    });
  }

  getRelatedPlaylists(id) {
    this.dataService.fetchPlaylists(id).subscribe((response: any) => {
      this.resultsService.playlistResultsChanged.next(response.items);
    });
  }
}
