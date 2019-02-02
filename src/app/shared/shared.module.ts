import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { LoadingComponent } from './loading/loading.component';
import { AvatarComponent } from './avatar/avatar.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { CardThumbnailComponent } from './card-thumbnail/card-thumbnail.component';

@NgModule({
  declarations: [
    ChannelCardComponent,
    VideoCardComponent,
    PlaylistCardComponent,
    LoadingComponent,
    AvatarComponent,
    InfoCardComponent,
    CardThumbnailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChannelCardComponent,
    VideoCardComponent,
    PlaylistCardComponent,
    LoadingComponent,
    AvatarComponent,
    InfoCardComponent,
    CardThumbnailComponent
  ]
})
export class SharedModule { }
