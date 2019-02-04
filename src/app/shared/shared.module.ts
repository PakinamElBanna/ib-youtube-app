import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { AvatarComponent } from './avatar/avatar.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    LoadingComponent,
    AvatarComponent,
    InfoCardComponent,
    ItemCardComponent,
    FilterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    AvatarComponent,
    InfoCardComponent,
    ItemCardComponent,
    FilterComponent
  ]
})
export class SharedModule { }
