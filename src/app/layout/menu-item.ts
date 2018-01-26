export interface MenuItem {
    title: string;
    url?: string;
    children?: MenuItem[];
    selected?: boolean;
    expanded?: boolean;
    icon?: string;
    home?: boolean;
    isTopMenu?: boolean;
}
