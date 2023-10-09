export interface TableInterface {
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        unpaged: boolean;
    };
    size: number;
    sort: {
        unsorted: boolean;
        sorted: boolean;
        empty: boolean;
    };
    totalElements: number;
    totalPages: number;
}

export interface TableItemsInterface {
    name: string;
    prop: string;
    flexGrow?: number;
    minWidth?: number;
    maxWidth?: number;
    draggable?: boolean;
    sortable?: boolean;
    headerClass?: string;
    cellClass?: string;
    badge?: boolean;
    dateFormat?: boolean;
    currencyFormat?: boolean;
    textNumberFormat?: boolean;
    status?: boolean;
    alignRight?: boolean;
}

export interface SmartTableItemsInterface {
    key: string;
    prop: string;
    flexGrow?: number;
    minWidth?: number;
    maxWidth?: number;
    draggable?: boolean;
    sortable?: boolean;
    headerClass?: string;
    cellClass?: string;
    badge?: boolean;
    dateFormat?: boolean;
    currencyFormat?: boolean;
    textNumberFormat?: boolean;
    status?: boolean;
    alignRight?: boolean;
}
