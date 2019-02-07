import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoMetadataComponent } from './video-metadata/video-metadata.component';
import { VideoComponent } from './video/video.component';
import { VideoRoutingModule } from './video-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VideoMetadataComponent, VideoComponent],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule
  ]
})
export class VideoModule { }
