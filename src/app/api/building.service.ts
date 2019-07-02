import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Building } from '../models/building.model';
import { CoreApiService } from './core-api';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  public buildings: Building[];
  public building: Building;
  private floor;

  constructor(private api: CoreApiService) {
  }

  getBuildings(): Observable<Building[]> {
    return this.api.get<Building[]>("/occupation/buildings");
  }
  getBuildingById(id: string): Observable<Building> {
    return this.api.get<Building>(`/occupation/building/${id}`);
  }
}
