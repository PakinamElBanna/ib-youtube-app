import { Component, Input } from '@angular/core';
import { NgForOfContext } from '@angular/common';
import { ResultsService } from '../results.service';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Input() resetFilters: boolean;

  showFilters = false;
  filters: any = { sort: 'relevance' };

  mobileFilters = {
    type: ['all', 'channel', 'playlist'],
    publishedAfter: ['today', 'this week', 'this month']
  };

  desktopFilters = {
    type: ['all', 'channel', 'playlist'],
    publishedAfter: ['today', 'this week', 'this month'],
    sort: ['relevance', 'date', 'view count']
  };

  constructor(
    private resultsService: ResultsService,
    public deviceService: DeviceService
  ) {}

  onChange(event) {
    if (event.target.name === 'upload date') {
      const date = new Date();
      switch (event.target.value) {
        case 'today': {
          this.filters.publishedAfter = new Date().toISOString();
          break;
        }
        case 'this week': {
          // Just before the previous week begins.
          this.filters.publishedAfter = new Date(
            date.setDate(date.getDate() - 6)
          ).toISOString();
          break;
        }
        case 'this month': {
          // just before the previous month begins. I assumed 28 days
          this.filters.publishedAfter = new Date(
            date.setDate(date.getDate() - 28)
          ).toISOString();
          break;
        }
      }
    } else {
      this.filters[event.target.name] = event.target.value;
    }
    return this.resultsService.filterResults(this.filters);
  }

  onFiltersClick(event) {
    this.showFilters = !this.showFilters;
  }

  removeFilter(name) {
    const filters = Object.keys(this.filters).reduce((object, key) => {
      if (key !== name) {
        object[key] = this.filters[key];
      }
      return object;
    }, {});
    this.filters = filters;
    this.showFilters = false;
    return this.resultsService.filterResults(this.filters);

  }
}
