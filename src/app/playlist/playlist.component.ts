import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results/results.service';
import { Result } from '../results/results/result.model';
import { Video } from '../video/video/video.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  id: { [key: string]: any; };
  query;
  video: Video;
  videoUrl: string;
  results: Result;

  constructor(
    private playlistService: PlaylistService,
    private route: ActivatedRoute ) {
      this.route.queryParams.subscribe(
      (params: Params) => {
      this.query = params;
      this.playlistService.getPlaylist(this.query);
    }
  );
}

ngOnInit() {
this.playlistService.playlistChanged.subscribe((playlist: Result) => {
this.results = new Result(playlist);
this.videoUrl = this.results.items[0].snippet.resourceId.videoId;
  });
}

}
