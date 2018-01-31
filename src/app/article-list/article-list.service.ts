import { ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';
import {ArticleInfo, Article_Type} from './model/article-info';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

declare var require: any;

const articles = require('./articles.config');

@Injectable()
export class ArticleListService {

  private articles: ArticleInfo[] = articles.articles;

  getArticles(type?: Article_Type): ArticleInfo[] {
    if (!type) {
      return this.articles;
    }
    return this.articles.filter(item => {
      return item.category === type;
    });
  }

}
