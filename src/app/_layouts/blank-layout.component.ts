import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defalt-layout',
    template: '<app-default-navbar></app-default-navbar><router-outlet></router-outlet>'
})
export class BlankLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
