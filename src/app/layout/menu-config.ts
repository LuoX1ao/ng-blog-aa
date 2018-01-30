import { MenuItem } from './menu-item';
import {Article_Type} from '../article-list/model/article-info';

export const TOPMENUS: MenuItem[] = [{
  title: 'Item',
  url: '/home',
  selected: false,
  isTopMenu: true
}, {
  title: 'Item',
  url: '/home',
  selected: false,
  isTopMenu: true
}, {
  title: 'Item',
  url: '/home',
  selected: false,
  isTopMenu: true
}, {
  title: 'Item',
  url: '/home',
  selected: false,
  isTopMenu: true
}, {
  title: 'Item',
  url: '/home',
  selected: false,
  isTopMenu: true
}];

export const MENUS: MenuItem[] = [{
    title: 'Home',
    url: '/home',
    home: true,
    selected: true
}, {
    title: 'Back End',
    url: '',
    children: [{
        title: 'Apache',
        url: '/articles',
        category: Article_Type.APACHE
    }, {
        title: 'Java',
        url: '/articles',
        category: Article_Type.JAVA
    }, {
        title: 'PHP',
        url: '/articles',
        category: Article_Type.PHP
    }]
}, {
    title: 'Database',
    url: '',
    children: [{
        title: 'MYSQL',
        url: '/articles',
        category: Article_Type.MYSQL
    }, {
        title: 'Oracle',
        url: '/articles',
        category: Article_Type.ORACLE
    }, {
        title: 'SQLServer',
        url: '/articles',
        category: Article_Type.SQLSERVER
    }]
}, {
    title: 'H5',
    url: '',
    children: [{
        title: 'Angular',
        url: '/articles',
        category: Article_Type.ANGULAR
    }, {
        title: 'Javascript',
        url: '/articles',
        category: Article_Type.JAVASCRIPT
    }, {
        title: 'React',
        url: '/articles',
        category: Article_Type.REACT
    }]
}, {
    title: 'IOS',
    url: '/articles',
    category: Article_Type.IOS
}, {
    title: 'Android',
    url: '/articles',
    category: Article_Type.ANDROID
}, {
    title: 'Other',
    url: '/articles',
    category: Article_Type.OTHERS
}];
