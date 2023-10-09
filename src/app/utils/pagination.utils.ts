import {HttpParams} from '@angular/common/http';

export class PageRequest {
    constructor(
        public size: number = 10,
        public page: number = 1,
        public searchTerm?: string,
        public sort?: string
    ) {
    }

    get requestParam(): HttpParams {
        return new HttpParams(
            {
                fromObject: {
                    page: `${this.page}`,
                    size: `${this.size}`,
                    searchTerm: `${this.searchTerm ? this.searchTerm : ''}`,
                    sort: `${this.sort ? this.sort : ''}`
                }
            }
        );
    }
}
  
export function settingDataPerPage(data: any[]) {
    let dataPerPage = [];
    const totalDataPerPage = [];

    for (let i = 0; i < data.length; i++) {
        if (dataPerPage.length < 3) {
            dataPerPage.push(data[i]);

            if (dataPerPage.length === 3 && i < data.length) {
                totalDataPerPage.push(dataPerPage);
                dataPerPage = [];
            }

            if (dataPerPage.length && i === data.length - 1) {
                totalDataPerPage.push(dataPerPage);
                dataPerPage = [];
            }
        }
    }

    return totalDataPerPage;
}
