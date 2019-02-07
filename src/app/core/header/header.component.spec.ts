import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const searching = true;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
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
    component.deviceService.device = 'desktop';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.search__input'))).toBeTruthy();
  });

  it('should set searching to true if searching is false on search button click', () => {
    const button = fixture.debugElement.query(By.css('.search__button'));
    component.searching = false;
    fixture.detectChanges();

    button.triggerEventHandler('click', {} as Event);
    fixture.detectChanges();
    expect(component.searching).toBeTruthy();
  });

  it('should display input field if searching is set to true', () => {
  component.searching = true;
  fixture.detectChanges();
  expect(fixture.debugElement.query(By.css('.search__input'))).not.toBeNull();
  });

  it('should change searching to true if the app is running on mobile and searching is set to false', () => {
    const button = fixture.debugElement.query(By.css('.search__button'));
    component.searching = false;
    component.deviceService.device = 'mobile';
    fixture.detectChanges();
    button.triggerEventHandler('click', {} as Event);
    fixture.detectChanges();
    expect(component.searching).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.search__input'))).not.toBeNull();
  });

  it('should call performSearch if the app is running on mobile and searching is set to true', () => {
    const button = fixture.debugElement.query(By.css('.search__button'));
    component.searching = true;
    component.deviceService.device = 'mobile';
    spyOn(component, 'performSearch').and.callThrough();

    button.triggerEventHandler('click', {} as Event);
    fixture.detectChanges();
    expect(component.performSearch).toHaveBeenCalled();
    expect(component.searching).toBeFalsy();
    expect(fixture.debugElement.query(By.css('.search__input'))).toBeNull();
  });
});
