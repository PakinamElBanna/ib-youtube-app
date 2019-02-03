import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../results/results/result.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Result;

  constructor() { }

  ngOnInit() {
  }

}
