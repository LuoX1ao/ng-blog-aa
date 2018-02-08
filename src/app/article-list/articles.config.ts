
import {Article_Type, ArticleInfo} from "./model/article-info";

export const articles: ArticleInfo[] = [{
  id: '5',
  title: 'The Factory Pattern',
  digest: 'The Factory pattern is a creational pattern concerned with the notion of creating objects.',
  time: '2018-02-08',
  url: '/article',
  tags: ['Javascript', 'Design pattern'],
  category: Article_Type.JAVASCRIPT
}, {
  id: '4',
  title: 'The Iterator Pattern',
  digest: 'The Iterator is a design pattern where iterators (objects that allow us to traverse through all the elements of a collection) access the elements of...... ',
  time: '2018-02-08',
  url: '/article',
  tags: ['Javascript', 'Design pattern'],
  category: Article_Type.JAVASCRIPT
}, {
  id: '3',
  title: 'The Command Pattern',
  digest: 'The Command pattern aims to encapsulate method invocation, requests or operations into a single object and gives us the ability to both parameterize and...... ',
  time: '2018-02-08',
  url: '/article',
  tags: ['Javascript', 'Design pattern'],
  category: Article_Type.JAVASCRIPT
}, {
  id: '2',
  title: 'The Reactive Extensions for JavaScript (RxJS) 4.0...',
  digest: '...is a set of libraries to compose asynchronous and event-based programs using observable collections and Array#extras style composition in JavaScript',
  time: '2018-01-31',
  url: '/article',
  tags: ['Javascript', 'RxJS'],
  category: Article_Type.JAVASCRIPT
}, {
  id: '1',
  title: 'Promise简介',
  digest: '古人云：“君子一诺千金”，这种“承诺将来会执行”的对象在JavaScript中称为Promise对象。',
  time: '2018-01-24',
  url: '/article',
  tags: ['Javascript', 'Promise'],
  category: Article_Type.JAVASCRIPT
}];
