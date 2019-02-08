import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Result } from '../results/results/result.model';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlist: Result;

  playlistChanged = new Subject<Result>();

  constructor(private dataService: DataService) {}

  getPlaylist(query) {
    this.dataService.fetchPlaylists(query).subscribe((response: any) => {
      this.setPlaylist(response);
    });
  }

  setPlaylist(playlist: any) {
    this.playlist = new Result(playlist);
    this.playlistChanged.next(this.playlist);
  }
}
