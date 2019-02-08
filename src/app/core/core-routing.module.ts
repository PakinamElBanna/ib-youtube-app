import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', loadChildren: '../results/results.module#ResultsModule' },
  { path: 'video', loadChildren: '../video/video.module#VideoModule'},
  { path: 'channel/:id', loadChildren: '../channel/channel.module#ChannelModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
