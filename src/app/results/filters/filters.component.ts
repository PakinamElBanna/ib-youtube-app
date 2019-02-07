import { Component, Input } from '@angular/core';
import { Filter, FilterBluePrint } from '../../shared/filter/filter.model';
import { NgForOfContext } from '@angular/common';
import { FilterComponent } from '../../shared/filter/filter.component';
import { ResultsService } from '../results.service';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() resultsCount: number;
  @Input() resetFilters: boolean;

  showFilters = false;
  filter = {order: 'relevance'};
  reset = false;

  mobileFilters = [
    new Filter('type', ['all', 'channel', 'playlist']),
    new Filter('upload date', ['anytime', 'today', 'this week', 'this month'])
  ];
  desktopFilters = [
    new Filter('upload date', ['anytime', 'today', 'this week', 'this month']),
    new Filter('type', ['all', 'channel', 'playlist']),
    new Filter('sort by', ['relevance', 'date', 'view count'])
  ];

  constructor(private resultsService: ResultsService,
              public  deviceService: DeviceService) {
    this.resultsService.resetFilters.subscribe(reset => this.reset = reset);
  }

  onFiltersClick(event) {
    this.showFilters = !this.showFilters;
  }


  onFilterSelected(filterCreator: FilterBluePrint) {
    const filter = {};
    filter[filterCreator.name] = filterCreator.value;
    let newFilter;
    if (this.reset === true) {
      newFilter = filterCreator.name === 'order' ? Object.assign(this.filter, filter) : Object.assign({order: this.filter.order}, filter);
    } else {
     newFilter = Object.assign(filter, this.filter);
    }
    this.filter = newFilter;
    this.resultsService.filterResults(this.filter);
    this.showFilters = false;
  }

  removeFilter(name) {
    let filter = {};
    filter = Object.keys(this.filter).reduce((object, key) => {
      if (key !== name) {
        object[key] = this.filter[key];
      }
      return object;
    }, {});
    this.resultsService.filterResults(this.filter);
    this.showFilters = false;
  }
}
