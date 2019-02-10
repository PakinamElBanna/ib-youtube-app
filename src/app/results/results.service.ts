import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Result } from './results/result.model';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: "root"
})
export class ResultsService {
  results: Result;
  playlistresults: Result;
  resultsChanged = new Subject<Result>();
  playlistResultsChanged = new Subject<Result>();
  resetFilters = new Subject<boolean>();

  query;
  searchTermChanged = new Subject<string>();

  constructor(private dataService: DataService) {}

  searchYoutube(query) {
    this.setQuery(query);
    this.dataService
      .search(this.query)
      .subscribe(
        (results: Result) => this.setResult(results),
        error => console.log(error)
      );
  }

  loadMore() {
    const query = Object.assign(
      { pageToken: this.results.nextPageToken },
      this.query
    );
    this.dataService
      .search(query)
      .subscribe(
        (results: Result) => this.appendResult(results),
        error => console.log(error)
      );
  }

  filterResults(filter) {
    const query = Object.assign(this.query, filter);
    this.dataService
      .search(query)
      .subscribe(
        (results: Result) => this.setResult(results, filter),
        error => console.log(error)
      );
  }

  setQuery(query) {
    this.query = query;
    this.searchTermChanged.next(this.query);
  }

  setResult(results: Result, filter = {}) {
    const reset =
      filter.hasOwnProperty("type") || filter.hasOwnProperty("publishedAfter")
        ? true
        : this.query.hasOwnProperty("order");
    this.resetFilters.next(reset);
    this.results = new Result(results);
    this.resultsChanged.next(this.results);
  }

  appendResult(results: Result) {
    this.results = new Result(this.results).appendItems(results);
    this.resultsChanged.next(this.results);
  }
}
