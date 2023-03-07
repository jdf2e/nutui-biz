export interface Category {
    catId: string | number,
    catName: string,
    children?: Array<CategoryPane>,
    [props: string]: any
}

export interface CategoryPaneItem {
    backImg?: string,
    catId: string,
    catName: string,
    [props: string]: any
}

export interface CategoryPane {
    catId: string | number,
    catName: string,
    children?: Array<CategoryPaneItem>,
    [props: string]: any
}

export interface CategoryPaneHandler {
    reset: () => void;
  }