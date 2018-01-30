import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {ArticleDetailModule} from "./article-detail/article-detail.module";
import {HighlightJsDirective} from "angular-highlight-js/dist/esm/src/highlightJs.directive";
// import {COMPILER_PROVIDERS} from "@angular/platform-browser-dynamic/src/compiler_factory";


const routes: Routes = [{
  path: '', loadChildren: 'app/pages/pages.module#PagesModule'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArticleDetailModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  // providers: [COMPILER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
