import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreApiService } from './core-api';
import { Floor } from '../models/floor.model';

@Injectable({
  providedIn: 'root'
})
export class FloorService {
  public floor: Floor;

  constructor(private api: CoreApiService) {
  }

  getFloor(buildingId: String, floorId: String): Observable<Floor> {
      return this.api.get<Floor>(`/floor/${buildingId}/${floorId}`);
  }
  updateFloor(floorId): Observable<Floor> {
    return this.api.get<Floor>(`floor/${floorId}`);
  }


}
