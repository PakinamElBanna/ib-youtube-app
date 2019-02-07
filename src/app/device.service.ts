import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  @HostListener('window:resize', ['$event'])

  device = 'mobile';

  getScreenSize(event?) {
    const device = window.innerWidth >= 700 ? 'desktop' : 'mobile';
    return device;
  }
}
