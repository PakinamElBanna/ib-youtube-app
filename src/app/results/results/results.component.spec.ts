import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { ItemCardComponent } from '../../shared/item-card/item-card.component';


describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent, LoadingComponent, ItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
