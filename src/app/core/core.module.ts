import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ResultsService } from '../results/results.service';

import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ResultsService
  ]
})
export class CoreModule { }
