import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Filter, FilterBluePrint } from './filter.model';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

removed;

@Input() filter: Filter;

@Output() filterSelected = new EventEmitter<any>();
@Output() filterRemoved = new EventEmitter<FilterBluePrint>();

  @ViewChild('filterInputValue') filterInputValueRef: ElementRef;

  constructor(public deviceService: DeviceService) { }

  onFilterChange(event) {
    let key = event.target.name === 'sortBy' ? 'order' : event.target.name;
    let value = event.target.value;

    if ( key === 'uploadDate') {
      key = 'publishedAfter';
      const date = new Date();

      switch (value) {
        case ('today') : {
          value = (new Date()).toISOString();
          break;
        }
        case ('thisWeek') : {
          // Just before the previous week begins.
          value = new Date(date.setDate(date.getDate() - 6)).toISOString();
          break;
        }
        case('thisMonth') : {
          // routerLinkJust before the previous month begins. I assumed 28 days
          value = new Date(date.setDate(date.getDate() - 28)).toISOString();
          break;
        }
        default: {
          this.onFilterRemove('publishedAfter');
        }
      }
    }

    const filterCreator = new FilterBluePrint(key, value);
    this.filterSelected.emit(filterCreator);
  }

  onFilterRemove(name) {
    const filterName = name === 'upload date' ? 'publishedAfter' : name;
    this.filterRemoved.emit(filterName);
    this.removed = name;
  }

}
