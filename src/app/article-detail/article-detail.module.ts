import {NgModule} from '@angular/core';
import {ArticleContainerComponent} from './article-container.component';

import {DynamicTypeBuilder} from './article-type-builder';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

function highlightJsFactory() {
  return hljs;
}


@NgModule({
  declarations: [ ArticleContainerComponent],
  imports: [ HighlightJsModule.forRoot({
    provide: HIGHLIGHT_JS,
    useFactory: highlightJsFactory
  })],
  exports: [ArticleContainerComponent]
})
export class ArticleDetailModule {
  static forRoot() {
    return {
      ngModule: ArticleDetailModule,
      providers: [ // singletons accross the whole app
        DynamicTypeBuilder
      ],
    };
  }
}
