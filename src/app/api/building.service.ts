import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../models/building.model';
import { CoreApiService } from './core-api';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  public buildings: Building[];

  constructor(private api: CoreApiService) {
  }

  getBuildings(): Observable<Building[]> {
      return this.api.get<Building[]>("/buildings");
  }
  getBuildingById(id: string): Observable<Building> {
    return this.api.get<Building>(`/buildings/${id}`);
  }


}
