import { Component, Input } from '@angular/core';
import { Video } from '../video/video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-metadata',
  templateUrl: './video-metadata.component.html',
  styleUrls: ['./video-metadata.component.scss']
})
export class VideoMetadataComponent {
  @Input() public video: Video;

  constructor(private router: Router ) {}
}
