import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResultsService } from '../../results/results.service';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
@Input() items: any[];
@Input() type: string;
@Output() loadMoreResults = new EventEmitter();

  constructor(private resultsService: ResultsService,
              public deviceService: DeviceService) {}

  onLoadMore() {
    this.resultsService.loadMore();
  }

  OnChanges(change) {
    this.items = change.items.currentValue;
  }
}
