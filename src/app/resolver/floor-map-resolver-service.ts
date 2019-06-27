import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY, empty } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { FloorService } from '../api/floor-service';
import { AppService } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class FloorMapResolverService implements Resolve<any> {

    constructor(
        private floorService: FloorService,
        private appService: AppService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let floorId = route.params["floorId"];
        if (!floorId) {
            floorId = "HL15-4";
        }
        return this.floorService.getFloorMap(floorId).pipe(map(async (data) => {
            if (data["status"] === "failed") {
                this.appService.showToaster(data["error"], 3000);
                return EMPTY;
            } else {
                return data;
            }
        }), catchError(error => {
            console.log(error);
            return EMPTY;
        }));
    }
}
