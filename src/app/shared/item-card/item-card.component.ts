import { Component, Input } from '@angular/core';
import { Result } from '../../results/results/result.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item: Result;
  constructor(public route: ActivatedRoute,
              public router: Router) {}
}
