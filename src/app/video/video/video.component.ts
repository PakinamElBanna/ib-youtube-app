import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class VideoComponent implements OnInit, OnDestroy {
  video: Video;
  results: Result;
  videoUrl: string;
  query;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private resultsService: ResultsService
  ) {

     this.query = this.route.snapshot.params;
     this.videoService.getVideo(this.query);

     this.route.paramMap.subscribe((params: Params) => {
      this.query = this.route.snapshot.params;
      this.videoUrl = `https://www.youtube.com/embed/${this.query.id}?autoplay=1`;
      this.videoService.getVideo(this.query);

    });

  }

  ngOnInit() {
    this.videoService.videoChanged.subscribe(
      (video: Video) => {
      this.video = video;
    });

    this.resultsService.resultsChanged.subscribe(
      (results: Result) => {
        this.results = new Result(results);
      }
    );
  }

  ngOnDestroy() {
    // TODO
    // this.videoService.videoChanged.unsubscribe();
  }
}
