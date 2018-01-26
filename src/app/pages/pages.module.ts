import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {LayoutModule} from '../layout/layout.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', component: PagesComponent, children: [{
    path: 'articles', loadChildren: 'app/article-list/article-list.module#ArticleListModule'
  }, {
    path: 'article'
  }, {
    path: '', redirectTo: 'articles'
  }]
}];

// const routes: Routes = [{
//   path: '', component: PagesComponent
// }];

@NgModule({
  declarations: [PagesComponent],
  imports: [RouterModule.forChild(routes), LayoutModule]
})
export class PagesModule {
  constructor() {

  }
}

