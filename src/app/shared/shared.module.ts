import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FilterComponent } from './filter/filter.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { LoadMoreComponent } from './load-more/load-more.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListComponent } from './list/list.component';
import { NumbersSuffixPipe } from './numbers-suffix.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { DeviceService } from '../device.service';

@NgModule({
  declarations: [
    LoadingComponent,
    InfoCardComponent,
    ItemCardComponent,
    FilterComponent,
    CamelCasePipe,
    NumbersSuffixPipe,
    LoadMoreComponent,
    ListComponent,
    SafeUrlPipe],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  exports: [
    LoadingComponent,
    InfoCardComponent,
    ItemCardComponent,
    FilterComponent,
    CamelCasePipe,
    NumbersSuffixPipe,
    LoadMoreComponent,
    InfiniteScrollModule,
    ListComponent,
    SafeUrlPipe
  ],
  providers: [
    DeviceService
  ]
})
export class SharedModule { }
