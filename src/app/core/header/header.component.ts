import { Component,
        OnInit,
        HostListener,
        Output,
        SimpleChange,
        EventEmitter,
        ViewChild,
        ElementRef } from '@angular/core';
// import { WindowRefService } from '../../services/window-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('searchInputValue') searchInputValueRef: ElementRef;
  @Output() searchStarted = new EventEmitter<string>();
  device = 'mobile';
  viewWidth: number;
  searching = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.viewWidth = window.innerWidth;
    if (this.viewWidth >= 700 ) {
      this.device = 'desktop';
      this.searching = true;
    } else {
      this.device = 'mobile';
    }
  }

    constructor() {
      // TODO: SET TITLE TO ROUTE QUERY ELEMENT LATER
      // returns the native window obj to be later used in tests
      this.getScreenSize();
  }

  onSearchClick() {
    this.searchInputValueRef
      ? this.performSearch(this.searchInputValueRef.nativeElement.value)
      : (this.searching = true);
  }

  performSearch(searchTerm: string) {
    this.searchStarted.emit(searchTerm);
    // TODO: REFACTOR
    if (this.device === 'mobile') {
      this.searching = false;
    }
  }
}
