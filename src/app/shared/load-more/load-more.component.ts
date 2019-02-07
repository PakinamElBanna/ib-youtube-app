import { Component, Output, EventEmitter } from '@angular/core';
import { ResultsService } from '../../results/results.service';

@Component({
  selector: 'app-load-more',
  template: '<button class="loadMore" (click)="loadMore()">Load more items</button>',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {

  @Output() loadMoreResults = new EventEmitter<any>();

  loadMore() {
    this.loadMoreResults.emit();
  }
}
