import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
  ) {}

  private token = "60bf8e5311f765a89af853e24f85f311876a0429f6cb3d191c4c7a3c6b2c8c65d12224a7dee760ba";
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
        setHeaders: {"X-API-KEY" : this.token},
    });
    return next.handle(req);
    // return next.handle(request);
  }
}
