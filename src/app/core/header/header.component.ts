import { Component, OnInit, HostListener, SimpleChange } from '@angular/core';
// import { WindowRefService } from '../../services/window-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  device = 'mobile';
  viewWidth: number;
  searching = false;
  // should be an empty string, but it's initialized with a default value here just to satisfy the task requirement.
  searchTerm = 'spongebob';

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.viewWidth = window.innerWidth;
    if (this.viewWidth >= 700 ) {
      this.device = 'desktop';
    } else {
      this.device = 'mobile';
    }
  }

    constructor() {
      // returns the native window obj to be later used in tests
      this.getScreenSize();
  }

  ngOnInit() {
  }

  onUpdateSearchTerm(event) {
    this.searchTerm = event.target.value;
  }

  onSearchClick() {
    if (this.device === 'mobile') {
      this.searching ? this.performSearch() : this.searching = true;
    } else {
      this.performSearch();
    }
  }

  performSearch() {
    this.searching = true;
    // perform search using service
    // reset searching to false;
    if (this.device === 'mobile') {
      this.searching = false;
    }
  }
}
