import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})

// Component for when a user navigates to a page that doesn't exist.

export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
