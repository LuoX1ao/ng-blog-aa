import {Article_Type} from '../article-list/model/article-info';
export interface MenuItem {
    title: string;
    url?: string;
    children?: MenuItem[];
    selected?: boolean;
    expanded?: boolean;
    icon?: string;
    home?: boolean;
    isTopMenu?: boolean;
    category?: Article_Type;
}
