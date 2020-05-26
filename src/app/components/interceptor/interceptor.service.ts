import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
}
    from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { LoaderService } from 'src/app/services/loader.service';
@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(request).pipe(
            finalize(() => this.loaderService.hide())
        );
    }
}