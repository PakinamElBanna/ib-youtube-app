import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  @HostListener('window:resize', ['$event'])

  device = 'mobile';

  getScreenSize(event?) {
    if (window.innerWidth >= 700 ) {
      this.device = 'desktop';
    } else {
      this.device = 'mobile';
    }
  }
}
