import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResultsComponent],
  imports: [CommonModule, ResultsRoutingModule, FormsModule, SharedModule]
})
export class ResultsModule {}
