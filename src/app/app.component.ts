import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-responsive-sidebar';
  constructor() { }
  sideBarMode = 'side';
  toggleButton = false;
  ngOnInit() {
    this.windowSize();
  }

  getBrowserSize() {
    var w: any, h: any;

    if (typeof window.innerWidth != 'undefined') {
      w = window.innerWidth; //other browsers
      h = window.innerHeight;
    }
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
      w = document.documentElement.clientWidth; //IE
      h = document.documentElement.clientHeight;
    }
    else {
      w = document.body.clientWidth; //IE
      h = document.body.clientHeight;
    }
    return { 'width': w, 'height': h };
  }


  windowSize() {
    console.warn(this.getBrowserSize().width);
    if (parseInt(this.getBrowserSize().width) < 980) {
      this.sideBarMode = 'over';
      this.toggleButton = true;
    }
    else {
      this.sideBarMode = 'side';
      this.toggleButton = false;
    }
  }
}
