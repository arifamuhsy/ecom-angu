import { PageRequest } from './pagination.utils';

export function SortTable(pageRequest: PageRequest, event: any): PageRequest {
    pageRequest.page = 1;
    pageRequest.sort = `${event.column.prop},${event.newValue}`;

    return pageRequest;
}
