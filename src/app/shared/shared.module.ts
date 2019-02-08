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
import { VideoMetadataComponent } from '../video/video-metadata/video-metadata.component';
import { FiltersComponent } from '../results/filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingComponent,
    ItemCardComponent,
    CamelCasePipe,
    NumbersSuffixPipe,
    LoadMoreComponent,
    VideoMetadataComponent,
    FiltersComponent,
    ListComponent,
    SafeUrlPipe
  ],
  imports: [CommonModule, FormsModule, InfiniteScrollModule],
  exports: [
    LoadingComponent,
    ItemCardComponent,
    CamelCasePipe,
    FormsModule,
    NumbersSuffixPipe,
    LoadMoreComponent,
    VideoMetadataComponent,
    FiltersComponent,
    InfiniteScrollModule,
    ListComponent,
    SafeUrlPipe
  ],
  providers: [DeviceService]
})
export class SharedModule {}
