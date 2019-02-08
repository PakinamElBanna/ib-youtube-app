import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { PlaylistRoutingModule } from './playlist-routing-module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedModule
  ]
})
export class PlaylistModule { }
