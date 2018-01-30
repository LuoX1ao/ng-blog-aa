
export interface ArticleInfo {
  id: string;
  title: string;
  digest: string;
  time: string;
  tags?: string[];
  url: string;
  category: Article_Type;
}

export enum Article_Type  {
  APACHE = 'apache',
  JAVA = 'java',
  PHP = 'php',
  MYSQL = 'mysql',
  ORACLE = 'oracle',
  SQLSERVER = 'sqlserver',
  ANGULAR = 'angular',
  REACT = 'react',
  JAVASCRIPT = 'javascript',
  IOS = 'ios',
  ANDROID = 'android',
  OTHERS = 'others'
}


