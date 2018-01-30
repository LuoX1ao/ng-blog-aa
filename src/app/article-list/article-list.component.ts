import {Component, OnInit} from '@angular/core';
import {ArticleInfo} from './model/article-info';
import {ArticleListService} from './article-list.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  providers: [ArticleListService]
})
export class ArticleListComponent implements OnInit {

  articles: ArticleInfo[];

  constructor(protected articleService: ArticleListService, private route: ActivatedRoute) {
    route.params.subscribe((param: Params) => {
      if (param) {
        this.articles = articleService.getArticles(param['category']);
      } else {
        this.articles = articleService.getArticles();
      }
    });
  }

  ngOnInit() {


  }

}
