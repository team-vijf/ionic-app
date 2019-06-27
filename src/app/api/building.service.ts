import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Building } from '../models/building.model';
import { CoreApiService } from './core-api';
import { Floor } from '../models/floor.model';

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
  getFloorFromBuildingById(floorId: string, buildingId: string): Observable<Floor> {
    if (this.building) {
      this.floor = this.filterForFloor(floorId);
    } else {
      this.getBuildingById(buildingId).subscribe( building => {
        this.building = building;
        this.floor= this.filterForFloor(floorId);
      });
    }

    return of(this.floor);
  }
  private filterForFloor(id: string): Floor {
    const currentFloor = this.building.floors.filter(floor => {
      if (floor.id === id) {
        return floor;
      }
    });
    return currentFloor[0];
  }
}
