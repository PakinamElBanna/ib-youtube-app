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

  @Input() resultsCount: number;

  showFilters = false;
  selected: '';
  filters: any = { order: 'relevance'};
  dateFilters;

  selectedFilters = ['sort'];

  mobileFilters = {
    type: ['video', 'channel', 'playlist'],
    publishedAfter: ['today', 'this week', 'this month']
  };

  desktopFilters = {
    type: ['video', 'channel', 'playlist'],
    publishedAfter: ['today', 'this week', 'this month'],
    order: ['relevance', 'date', 'view count']
  };

  constructor(
    private resultsService: ResultsService,
    public deviceService: DeviceService
  ) {}


  onMobileChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    if (event.target.name === 'upload date') {
      value = this.parseDate(event.target.value);
      name = 'publishedAfter';
    }
    this.filters[name] = value;
    return this.resultsService.filterResults(this.filters);
  }


  onDesktopChange(event) {
    let name = event.target.name;
    let value = event.target.id;

    if (event.target.name === 'upload date' || event.target.name === 'publishedAfter' ) {
      name = 'publishedAfter';
      this.dateFilters = value;
      value = this.parseDate(value);
    }
    if (event.target.checked === false) {
      delete this.filters[name];
      return this.resultsService.filterResults(this.filters);
    } else {
      if (event.target.name === 'publishedAfter' && this.filters['type']) {
        delete this.filters['type'];
        this.showFilters = false;
        this.filters[name] = value;
        const filters = this.filters;
        return this.resultsService.filterResults(this.filters);
      }
      if (event.target.name === 'type' && this.filters['publishedAfter']) {
        delete this.filters['publishedAfter'];
        this.showFilters = false;
        this.filters[name] = value;
        const filters = this.filters;
        return this.resultsService.filterResults(this.filters);
      }
      this.filters[name] = value;
      return this.resultsService.filterResults(this.filters);
    }
  }

  onRadioChange(event) {
    const name = event.target.name;
    const value = event.target.id === 'view count' ? 'viewCount' : event.target.id;
    this.filters[name] = value;
    const filters = this.filters;
    return this.resultsService.filterResults(filters);
  }

  parseDate(value) {
    const date = new Date();
    let parsedDate;
    switch (value) {
      case 'today': {
        parsedDate = new Date().toISOString();
        break;
      }
      case 'this week': {
        // Just before the previous week begins.
        parsedDate = new Date(
          date.setDate(date.getDate() - 6)
        ).toISOString();
        break;
      }
      case 'this month': {
        // just before the previous month begins. I assumed 28 days
        parsedDate = new Date(
          date.setDate(date.getDate() - 28)
        ).toISOString();
        break;
      }
    }
    return parsedDate;
  }

  onFiltersClick(event) {
    this.showFilters = !this.showFilters;
  }
}
