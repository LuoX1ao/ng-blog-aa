import { Component } from '@angular/core';
import {MenuItem} from './layout/menu-item';
import {MENUS, TOPMENUS} from './layout/menu-config';

@Component({
  selector: 'app-root',
  template: `
    <app-layout [menus]='menus' [topMenus]='topMenus'>
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class AppComponent {

  topMenus: MenuItem[] = TOPMENUS;

  menus: MenuItem[] = MENUS;

}
