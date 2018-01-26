import { Injectable } from '@angular/core';
import {ArticleInfo} from "./model/article-info";

declare var require: any;

var articles = require('./articles.config');

@Injectable()
export class ArticleListService {

  getArticles(): ArticleInfo[] {
    return articles.articles;
  }

}
