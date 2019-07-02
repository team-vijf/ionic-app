import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Floor } from '../models/floor.model';
import { FloorService } from '../api/floor-service';
import { AppService } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class FloorResolverService implements Resolve<Floor> {

    constructor(
        private floorService: FloorService,
        private appService: AppService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Floor> {
        const floorId = route.paramMap.get('floorId');
        return this.floorService.getFloor(floorId).pipe(map(data => {
            this.floorService.floor = data;
            return this.floorService.floor;
        }), catchError(error => {
            console.log(error);
            return EMPTY;
        }));
    }
}
