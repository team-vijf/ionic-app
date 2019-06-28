import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CoreApiService {
  url = environment.dataUrl;
  constructor(
    private httpClient: HttpClient
  ) {
  }

  get<T>(url): Observable<T> {
    if (!url.startsWith("/")) {
      url = "/" + url;
    }
    return this.httpClient.get<T>(this.url + url);
  }
  requestAccess<T>(): Observable<T> {
    return this.httpClient.post<T>(environment.requestAccessUrl, {
      uid: "webapp",
      shared_secret: "secret",
      type: "app"
    }
    );
  }


}
