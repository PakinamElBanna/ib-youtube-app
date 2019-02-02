import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ChannelCardComponent, VideoCardComponent, PlaylistCardComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class SharedModule { }
