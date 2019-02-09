import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from '../results/results/results.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', loadChildren: '../results/results.module#ResultsModule'},
  { path: 'video/:id', loadChildren: '../video/video.module#VideoModule'},
  { path: 'playlist/:id', loadChildren: '../playlist/playlist.module#PlaylistModule'},
  { path: 'channel/:id', loadChildren: '../channel/channel.module#ChannelModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
