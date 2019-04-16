import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BuildingService } from '../api/building.service';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map} from 'rxjs/operators';
import { Building } from '../models/building.model';

@Injectable({
    providedIn: 'root'
  })
export class BuildingResolverService implements Resolve<Building[]> {

    constructor(private buildingService: BuildingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Building[]> {
        return this.buildingService.getBuildings().pipe(map((data) => {
            this.buildingService.buildings = data["buildings"];
            return this.buildingService.buildings;
        }), catchError(error => {
            console.log(error);
            return EMPTY;
        }));
    }
}
