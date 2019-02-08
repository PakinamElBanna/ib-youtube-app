import { Component, Input } from '@angular/core';
import { Result } from '../../results/results/result.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ResultsService } from '../../results/results.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item: Result;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService,
              private resultsService: ResultsService) {}

  navigateToView(type, idType, relatedId, id) {
  const map = Object.assign({}, { idType, id, relatedId });
  const query = Object.assign({}, map);

  this.router.navigate([`/${type}`, id], { queryParams: query});
  }

  retrievePlaylist(id) {
    const query = { playlistId: id };
    this.router.navigate(['/playlist', id], { queryParams: query});
  }
}
