
export interface ArticleInfo {
  id: string;
  title: string;
  digest: string;
  time: string;
  tags?: string[];
  url: string;
  categroy: Article_Type;
}

export enum Article_Type {
  ANGULAR,
  REACT,
  VUE
}
