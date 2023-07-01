import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*------ nav-list menu -----*/
  sidebarItems = [
    { logo: 'home', link: 'home', text: 'Home' },
    { logo: 'business', link: 'about', text: 'Company' },
    { logo: 'store', link: 'null', text: 'Branch Office' },
    { logo: 'business_center', link: 'null', text: 'Position' },
    { logo: 'playlist_add_check', link: 'null', text: 'Risk Control' },
    { logo: 'whatshot', link: 'null', text: 'Fire' },
    { logo: 'format_color_fill', link: 'null', text: 'Hygiene' },
    { logo: 'school', link: 'null', text: 'Eduction' },
    { logo: 'schedule', link: 'null', text: 'Agenda' },
    { logo: 'security', link: 'null', text: 'Personal' },
    { logo: 'account_circle', link: 'null', text: 'Profile' },
    { logo: 'settings', link: 'null', text: 'Settings' },
    { logo: 'help', link: 'null', text: 'Help' },
    { logo: 'exit_to_app', link: 'null', text: 'Log out' },
  ]


  sideBarMode: string = 'side';
  toggleButton: boolean = false;
  sidebartogglebtn?: boolean;
  opensidebar: boolean = true;

  showSubmenu: boolean = false;
  isShowing: boolean = false;
  isExpanded: boolean = true;
  dropdoenitems: boolean = false;

  themechange: boolean = false;
  theme: string = "primary";

  ngOnInit() {
    this.windowSize();
  }

  getBrowserSize() {
    let w: any, h: any;

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

  closeSideBar() {
    this.toggleButton = true;
  }

  openSideBar() {
    this.toggleButton = false;
  }


  windowSize() {
    if (parseInt(this.getBrowserSize().width) < 980) {
      this.sideBarMode = 'over';
      this.opensidebar = false;
      this.toggleButton = true;
      this.sidebartogglebtn = true;

    }
    else {
      this.sideBarMode = 'side';
      this.opensidebar = true;
      this.sidebartogglebtn = false;
    }
  }



  opeDropdown() {
    this.dropdoenitems = !this.dropdoenitems;
  }

  /*----------- Change Template Theme -----------*/


  changeTheme(data: MatSlideToggleChange) {
    if (data.checked) {
      this.theme = "accent";
      this.themechange = true;
    }
    else {
      this.theme = "primary";
      this.themechange = false;
    }
  }
}
