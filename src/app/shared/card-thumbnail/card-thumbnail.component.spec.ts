import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThumbnailComponent } from './card-thumbnail.component';

describe('CardThumbnailComponent', () => {
  let component: CardThumbnailComponent;
  let fixture: ComponentFixture<CardThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
