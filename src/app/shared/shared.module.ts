import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [ChannelCardComponent, VideoCardComponent, PlaylistCardComponent, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedModule { }
