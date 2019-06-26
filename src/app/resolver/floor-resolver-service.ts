import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import {mergeMap, catchError, map} from 'rxjs/operators';
import { Floor } from '../models/floor.model';
import { FloorService } from '../api/floor-service';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
  })
export class FloorResolverService implements Resolve<Floor> {

    constructor(
        private floorService: FloorService,
        private toastController: ToastController
        ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Floor> {
        const floorId    = route.paramMap.get('floorId');
        return this.floorService.getFloor( floorId).pipe(map(data => {
            if (data["status"] === "failed") {
                this.toastController.create({
                    message: data["error"],
                    duration: 3000
                  }).then(toastr => {
                    toastr.present();
                  });
            }
            this.floorService.floor = data;
            return this.floorService.floor;
        }), catchError(error => {
            console.log(error);
            return EMPTY;
        }));
    }
}
