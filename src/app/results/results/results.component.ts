import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Result } from './result.model';
import { ResultsService } from '../results.service';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  results: Result;

  constructor(private route: ActivatedRoute,
              public deviceService: DeviceService,
              private resultsService: ResultsService) {

    this.route.queryParams.subscribe((queryParams: Params) => {
      const query = {q: ''};
      query.q = queryParams.query;
      this.resultsService.searchYoutube(query);
    });
  }

  ngOnInit() {
    this.resultsService.resultsChanged.subscribe(
      (results: Result) => {
        this.results = new Result(results);
      }
    );
  }

  ngOnDestroy() {
    // TODO
    // this.resultsService.resultsChanged.unsubscribe();
  }

}
