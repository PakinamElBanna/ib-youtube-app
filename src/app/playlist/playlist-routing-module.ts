import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistComponent } from './playlist.component';

const playlistRoutes: Routes = [
  { path: '', component: PlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(playlistRoutes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule {}
