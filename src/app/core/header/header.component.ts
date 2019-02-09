import { Component,
        OnInit,
        SimpleChange,
        ElementRef,
        ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ResultsService } from '../../results/results.service';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('searchInputValue') searchInputValueRef: ElementRef;

  searching = this.deviceService.getScreenSize() === 'desktop';
  dynamicTitle = 'Youtube';

    constructor(private router: Router,
                public deviceService: DeviceService,
                private resultsService: ResultsService) {}

  onSearchClick(event) {
    event.preventDefault();
    this.searchInputValueRef
      ? this.performSearch(this.searchInputValueRef.nativeElement.value)
      : (this.searching = true);
  }

  performSearch(searchTerm: string) {
    this.dynamicTitle = searchTerm;
    this.router.navigate(['search'], { queryParams: { query: searchTerm }});
    if (this.deviceService.getScreenSize() === 'mobile') {
      this.searching = false;
    }
  }
}
