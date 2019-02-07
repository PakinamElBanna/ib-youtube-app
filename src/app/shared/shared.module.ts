import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ItemCardComponent } from './item-card/item-card.component';
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
    ItemCardComponent,
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
    ItemCardComponent,
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
