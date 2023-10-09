import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {constant} from '../../../environments/constant';
import {CommentInterface} from '../models';

@Injectable({providedIn: 'root'})
export class CommentServices {
    constructor(private http: HttpClient) {
    }

    getBcmComment(apRegNo: string): Observable<CommentInterface[]> {
        return this.http.get<CommentInterface[]>(`${constant.bcmUrl}/log/note/${apRegNo}`);
    }

    getBwuComment(apRegNo: string): Observable<CommentInterface[]> {
        return this.http.get<CommentInterface[]>(`${constant.bwuUrl}/log/note/${apRegNo}`);
    }
}
