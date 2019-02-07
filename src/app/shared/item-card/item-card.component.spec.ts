import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ItemCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
