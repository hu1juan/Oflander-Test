import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defalt-layout',
  template:
    '<app-navbar></app-navbar><section class="container"><router-outlet></router-outlet></section>'
})
export class DefaultLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
