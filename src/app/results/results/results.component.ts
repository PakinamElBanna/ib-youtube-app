import { Component, OnInit } from '@angular/core';
import { Result } from './result.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: Result[] = [];

  constructor() { }

  ngOnInit() {
  }

}
