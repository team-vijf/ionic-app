import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { token } from './token';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  private token = token; // read from a file in gitignore, looks like: export const token = '...';
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
        setHeaders: {"X-API-KEY" : this.token},
    });
    return next.handle(req);
    // return next.handle(request);
  }
}
