import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';

const videoRoutes: Routes = [
  { path: ':id', component: VideoComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(videoRoutes)],
  exports: [RouterModule]
})
export class VideoRoutingModule {}
