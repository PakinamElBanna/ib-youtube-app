import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Filter } from './filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

@Input() filter: Filter;
@Input() device: string;

  @ViewChild('filterInputValue') filterInputValueRef: ElementRef;

  constructor() { }

  onFilterChange(event) {
    // add filter to service
  }

  onFilterRemove(event) {
    console.log(this.filterInputValueRef.nativeElement.value);
    this.filterInputValueRef.nativeElement.checked = false;
    // remove filter from service
  }

}
