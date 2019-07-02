import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BuildingService } from '../api/building.service';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map} from 'rxjs/operators';
import { Building } from '../models/building.model';

@Injectable({
    providedIn: 'root'
  })
export class BuildingIdResolverService implements Resolve<Building> {

    constructor(private buildingService: BuildingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Building> {
        const buildingId = route.paramMap.get('buildingId');

        return this.buildingService.getBuildingById(buildingId).pipe(map((data) => {
            this.buildingService.building = data;
            return this.buildingService.building;
        }), catchError(error => {
            console.error(error);
            return EMPTY;
        }));
    }
}
