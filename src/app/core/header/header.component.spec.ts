import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

class WindowRefService {
  size = 900;
  _window(): any {
    return this.size;
  }

  nativeWindow() {
    return this._window();
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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

  it(`should have as default searchTerm 'spongebob`, () => {
    expect(component.searchTerm).toEqual('spongebob');
  });

  it(`should have searching property set to false by default`, () => {
    expect(component.searching).toBeFalsy();
  });

  it(`should always display the search input field if the app is running on desktop`, () => {
    component.device = 'mobile';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.search__input'))).toBeNull();
    component.device = 'desktop';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.search__input'))).toBeTruthy();
  });

  it('should set searching to true if searching is false on search button click', () => {
    const button = fixture.debugElement.query(By.css('.search__button'));
    fixture.detectChanges();
    expect(component.searching).toBeFalsy();

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
    component.device = 'mobile';

    button.triggerEventHandler('click', {} as Event);
    fixture.detectChanges();
    expect(component.searching).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.search__input'))).not.toBeNull();
  });

  it('should call performSearch if the app is running on mobile and searching is set to true', () => {
    const button = fixture.debugElement.query(By.css('.search__button'));
    component.searching = true;
    component.device = 'mobile';
    spyOn(component, 'performSearch').and.callThrough();

    button.triggerEventHandler('click', {} as Event);
    fixture.detectChanges();
    expect(component.performSearch).toHaveBeenCalled();
    expect(component.searching).toBeFalsy();
    expect(fixture.debugElement.query(By.css('.search__input'))).toBeNull();
  });

  it('should set searchTerm when onUpdateSearchTerm is called', () => {
    component.searching = true;
    fixture.detectChanges();
    spyOn(component, 'onUpdateSearchTerm').and.callThrough();
    const input = fixture.debugElement.query(By.css('.search__input'));
    const el = input.nativeElement;
    el.value = 'newTerm';
    el.dispatchEvent(new Event('input'));
    expect(component.searchTerm).toBe('newTerm');
  });

  it('should trigger onResize method when window is resized', () => {
    const spyOnResize = spyOn(component, 'getScreenSize');
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(spyOnResize).toHaveBeenCalled();
  });

});
