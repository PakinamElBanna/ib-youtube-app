import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';

const resultsRoutes: Routes = [
  { path: '', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(resultsRoutes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule {}
