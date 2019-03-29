import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Building } from '../models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  public buildings: Building[];
  // json-server -w testData.json
  url = "http://www.localhost:3000";

  constructor(private httpClient: HttpClient) {
  }

  getBuildings(): Observable<Building[]>{
      return this.httpClient.get<Building[]>(this.url + "/buildings");
  }


}
