import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {ArticleListService} from './article-list/article-list.service';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleContainerComponent} from './article-detail/article-container.component';
import {DynamicTypeBuilder} from './article-detail/article-type-builder';
import {HIGHLIGHT_JS, HighlightJsModule} from 'angular-highlight-js';
import * as hljs from 'highlight.js';
import {LayoutComponent} from './layout/layout.component';

function highlightJsFactory() {
  return hljs;
}

const routes: Routes = [
  {
    path: 'articles/:category', component: ArticleListComponent
  }, {
    path: 'articles', component: ArticleListComponent
  }, {
    path: 'article', component: ArticleContainerComponent
  }, {
    path: '', redirectTo: 'articles', pathMatch: 'full'
  }, {
    path: '**', redirectTo: ''
}];

@NgModule({
  declarations: [
    AppComponent, ArticleListComponent, ArticleContainerComponent, LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DynamicTypeBuilder, ArticleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
