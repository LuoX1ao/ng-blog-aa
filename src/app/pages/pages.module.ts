import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {LayoutModule} from '../layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {ArticleContainerComponent} from '../article-detail/article-container.component';
import {CommonModule} from '@angular/common';

import {ArticleDetailModule} from '../article-detail/article-detail.module';



const routes: Routes = [{
  path: '', component: PagesComponent, children: [{
    path: 'articles', loadChildren: 'app/article-list/article-list.module#ArticleListModule'
  }, {
    path: 'article', component: ArticleContainerComponent
  }, {
    path: '', redirectTo: 'articles'
  }]
}];

@NgModule({
  imports: [CommonModule, ArticleDetailModule, RouterModule.forChild(routes), LayoutModule],
  declarations: [PagesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
  constructor() {

  }
}

