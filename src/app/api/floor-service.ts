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

  getFloor(floorId: String): Observable<Floor> {
    return this.api.get<Floor>(`occupation/floor/${floorId}`);
  }
  getFloorMap(floorId: String): Observable<any> {
    return this.api.get(`floorplan/${floorId}`);
  }

}
