import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreApiService {
  url = "http://api.arjen.io/public";

  constructor(private httpClient: HttpClient) {
  }

  get<T>(url): Observable<T> {
    if (!url.startsWith("/")) {
        url = "/" + url;
    }
    return this.httpClient.get<T>(this.url + url);
  }


}
