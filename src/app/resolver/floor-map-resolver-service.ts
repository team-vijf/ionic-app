import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map} from 'rxjs/operators';
import { Floor } from '../models/floor.model';
import { FloorService } from '../api/floor-service';

@Injectable({
    providedIn: 'root'
  })
export class FloorMapResolverService implements Resolve<any> {

    constructor(private floorService: FloorService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let floorId = route.params["floorId"];
        if (!floorId) {
            floorId = "HL15-4";
        }
        return this.floorService.getFloorMapTest(floorId).pipe(map((data) => {
            return data;
        }), catchError(error => {
            console.log(error);
            return EMPTY;
        }));
    }
}
