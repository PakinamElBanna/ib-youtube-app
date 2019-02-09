import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VideoService } from '../video.service';
import { Video } from './video.model';
import { Result } from '../../results/results/result.model';
import { ResultsService } from '../../results/results.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video: Video;
  public results: Result;
  videoUrl: string;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private resultsService: ResultsService ) {

    this.route.queryParams.subscribe((params: Params) => {
      this.getVideo(params);
    });
  }

  ngOnInit() {
    this.videoService.videoChanged.subscribe((video: Video) => {
      this.video = video;
    });

    this.videoService.videoListChanged.subscribe((results: Result) => {
      this.results = new Result(results);
    });
  }

  getVideo(params) {
    this.videoUrl = `https://www.youtube.com/embed/${params.id}`;
    this.videoService.getVideo(params);
    const relatedToVideoQuery = {relatedToVideoId: params.id};
    this.videoService.getRelatedVideos(relatedToVideoQuery);
  }
}
