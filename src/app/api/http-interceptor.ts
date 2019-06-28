import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InitializationService } from './initialization.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private api: InitializationService
  ) {}

  private token = this.api.token; // read from a file in gitignore, looks like: export const token = '...';
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.api.token);
    const req = request.clone({
        setHeaders: {"X-API-KEY" : this.token},
    });
    return next.handle(req);
    // return next.handle(request);
  }
}
