import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VideoService } from '../video.service';
import { Video } from './video.model';
import { Result } from '../../results/results/result.model';
import { ResultsService } from '../../results/results.service';

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent implements OnInit, OnDestroy {
  video: Video;
  results: Result;
  playlistResults: Result;
  videoUrl: string;
  relatedVideoQuery = { relatedToVideoId: null };
  relatedPlaylistQuery = { relatedToPlaylistId: null };
  videoQuery = { videoId: null };
  playListQuery = { playListId: null };
  query;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private resultsService: ResultsService
  ) {
    this.query = this.route.snapshot.params;
    this.route.queryParams.subscribe((params: Params) => {
      params.type === 'playlist' ? this.getRelatedPlaylist(params) : this.getVideo(params);
    });
  }

  ngOnInit() {
    this.videoService.videoChanged.subscribe((video: Video) => {
      this.video = video;
    });

    this.resultsService.resultsChanged.subscribe((results: Result) => {
      this.results = results;
    });

    this.resultsService.playlistResultsChanged.subscribe((results: Result) => {
      this.playlistResults = results;
    });
  }

  getVideo(params) {
    const videoQuery = this.videoQuery;
    const relatedVideoQuery = this.relatedVideoQuery;
    videoQuery.videoId = params.videoId;
    relatedVideoQuery.relatedToVideoId = params.id;
    videoQuery.videoId = params.id;
    this.videoUrl = `https://www.youtube.com/embed/${params.id}?autoplay=1`;
    this.videoService.getVideo(videoQuery);
    this.videoService.getRelatedVideos(relatedVideoQuery);
    // this.getRelatedPlaylist(videoQuery.videoId);
  }

  getRelatedPlaylist(params) {
    const playListQuery = this.playListQuery;
    playListQuery.playListId = params.playlistId;
    this.videoService.getRelatedPlaylists(playListQuery);
  }

  ngOnDestroy() {
    // TODO
    // this.videoService.videoChanged.unsubscribe();
  }
}
