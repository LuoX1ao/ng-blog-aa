import { MenuItem } from './layout/menu-item';

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
        url: '/back-end/apache'
    }, {
        title: 'Java',
        url: '/back-end/java'
    }, {
        title: 'PHP',
        url: '/back-end/php'
    }]
}, {
    title: 'Database',
    url: '',
    children: [{
        title: 'MYSQL',
        url: '/database/mysql'
    }, {
        title: 'Oracle',
        url: '/database/oracle'
    }, {
        title: 'SQLServer',
        url: '/database/sqlserver'
    }]
}, {
    title: 'H5',
    url: '',
    children: [{
        title: 'Angular',
        url: '/h5/angular'
    }, {
        title: 'Javascript',
        url: '/h5/javascript'
    }, {
        title: 'React',
        url: '/h5/react'
    }]
}, {
    title: 'IOS',
    url: '/ios'
}, {
    title: 'Android',
    url: '/android'
}, {
    title: 'Other',
    url: '/other'
}];
