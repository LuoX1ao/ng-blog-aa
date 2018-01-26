import {NgModule} from '@angular/core';
import {ArticleListComponent} from './article-list.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ArticleListService} from "./article-list.service";

const routes: Routes = [{
  path: '', component: ArticleListComponent
}];

@NgModule({
  declarations: [ArticleListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ArticleListComponent],
  providers: [ArticleListService]
})
export class ArticleListModule {}
