import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DeviceService } from '../../device.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const searching = true;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should always display the search input field if the app is running on desktop`, () => {
    const deviceService = TestBed.get(DeviceService);
    const device = spyOn(deviceService, 'getScreenSize').and.returnValue('desktop');
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.search__input'))).toBeTruthy();
  });

  it('should display input field if searching is set to true', () => {
  component.searching = true;
  fixture.detectChanges();
  expect(fixture.debugElement.query(By.css('.search__input'))).not.toBeNull();
  });
});
