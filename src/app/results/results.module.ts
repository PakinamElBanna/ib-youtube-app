import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResultsComponent, FiltersComponent],
  imports: [CommonModule, ResultsRoutingModule, FormsModule, SharedModule]
})
export class ResultsModule {}
