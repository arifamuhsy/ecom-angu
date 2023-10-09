import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ResponseInterceptorServices implements HttpInterceptor {
    constructor(private toasterService: ToastrService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                tap(
                    (event) => {
                        if (event instanceof HttpResponse) {
                            if ((event.status === 200 || event.status === 202) && event.body.message) {
                                this.toasterService.success(`${event.body.message}`, 'Success');
                            }
                        }
                    }, async (err) => {
                        if (err instanceof HttpErrorResponse) {
                            if (err.error.message) {
                                this.toasterService.error(`${err.error.message}`, 'Error', {
                                    enableHtml: true,
                                });
                            } else if (err.error.error_description) {
                                this.toasterService.error(`${err.error.error_description}`, 'Error'), {
                                    enableHtml: true,
                                };
                            } else if (err.error instanceof Blob) {
                                const message = JSON.parse(await err.error.text()).message;
                                this.toasterService.error(`${message}`, 'Error', {
                                    enableHtml: true,
                                });
                            } else {
                                this.toasterService.error(`${err.message}`, 'Error', {
                                    enableHtml: true,
                                });
                            }
                        }
                    }
                )
            );
    }
}
