import {Component} from '@angular/core';
import {MenuItem} from '../layout/menu-item';
import {MENUS, TOPMENUS} from '../menu-config';

@Component({
  selector: 'app-pages',
  template: `<app-layout [menus]="menus" [topMenus]="topMenus">
  <router-outlet></router-outlet>
  </app-layout>`
})
export class PagesComponent {

  topMenus: MenuItem[] = TOPMENUS;

  menus: MenuItem[] = MENUS;

}

