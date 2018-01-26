import {Component, Input, OnInit} from '@angular/core';
import {ArticleInfo} from './model/article-info';
import {ArticleListService} from "./article-list.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: ArticleInfo[];

  constructor(private articleService: ArticleListService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
