import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { InfiniteScrollDirective, InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FiltersComponent } from '../../results/filters/filters.component';
import { ItemCardComponent } from '../item-card/item-card.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { LoadingComponent } from '../loading/loading.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, FiltersComponent, ItemCardComponent, LoadMoreComponent, LoadingComponent, InfiniteScrollDirective],
      imports: [InfiniteScrollModule, ReactiveFormsModule, FormsModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
