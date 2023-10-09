import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from '../../../environments/constant';

@Injectable({ providedIn: 'root' })
export class SharedServices {
    constructor(private http: HttpClient) {
    }

    getSharedReference(service: string, searchTerm: string): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/reference/${service}/data?searchTerm=${searchTerm}`);
    }

    getSharedReferenceByReferenceId(service: string, referenceId: any, searchTerm: any): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/reference/${service}/data/${referenceId}?searchTerm=${searchTerm}`);
    }
}
