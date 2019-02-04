import { Component, HostListener } from '@angular/core';
import { Filter } from '../../shared/filter/filter.model';
import { NgForOfContext } from '@angular/common';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  device = 'mobile';
  showFilters = false;
  mobileFilters = [
    new Filter('type', ['All', 'Channel', 'Playlist']),
    new Filter('upload time', ['Anytime', 'Today', 'This Week', 'This Month'])
  ];
  desktopFilters = [
    new Filter('type', ['All', 'Channel', 'Playlist']),
    new Filter('upload time', ['Anytime', 'Today', 'This Week', 'This Month']),
    new Filter('sort by', ['relevance', 'Upload date', 'View count'])
  ];

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    if (window.innerWidth >= 700) {
      this.device = 'desktop';
    } else {
      this.device = 'mobile';
    }
  }

  constructor() {
    this.getScreenSize();
  }

  onFiltersClick(event) {
    this.showFilters = !this.showFilters;
  }
}
