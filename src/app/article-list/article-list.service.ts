import { Injectable } from '@angular/core';
import { ArticleInfo} from './model/article-info';

declare var require: any;

const articles = require('./articles.config');

@Injectable()
export class ArticleListService {

  articles: Array<ArticleInfo>;

  constructor() {
    console.log('service Create');
    this.articles = articles.articles;
  }

  getArticles(type?: string): ArticleInfo[] {
    if (!type) {
      return this.articles;
    }
    return this.articles.filter(item => {
      return item.category === type;
    });
  }

}
