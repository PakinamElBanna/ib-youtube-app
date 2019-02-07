import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelComponent } from './channel/channel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChannelComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChannelRoutingModule
  ]
})
export class ChannelModule { }
