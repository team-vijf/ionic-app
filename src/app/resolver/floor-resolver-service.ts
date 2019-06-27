import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Floor } from '../models/floor.model';
import { FloorService } from '../api/floor-service';
import { BuildingService } from '../api/building.service';
import { AppService } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class FloorResolverService implements Resolve<Floor> {

    constructor(
        private floorService: FloorService,
        private buildingService: BuildingService,
        private appService: AppService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Floor> {
        const floorId = route.paramMap.get('floorId');
        const buildingId = route.paramMap.get('buildingId');
        return this.floorService.getFloor(floorId).pipe(map(data => {
            // if (data["status"] === "failed") {
            //     this.appService.showToaster(data["error"], 3000);
            // }
            this.buildingService.getFloorFromBuildingById(floorId, buildingId).subscribe(floor => {
                console.log(floor)
                this.floorService.floor = floor;
                this.floorService.floor.classrooms = floor.classrooms;
                // Dont need to return anything.
                return EMPTY;
            });
        }), catchError(error => {
            console.log(error);
            return EMPTY;
        }));
    }
}
