import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY, empty } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Floor } from '../models/floor.model';
import { FloorService } from '../api/floor-service';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class FloorMapResolverService implements Resolve<any> {

    constructor(
        private floorService: FloorService,
        private toastController: ToastController
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let floorId = route.params["floorId"];
        if (!floorId) {
            floorId = "HL15-4";
        }
        return this.floorService.getFloorMap(floorId).pipe(map(async (data) => {
            if (data["status"] === "failed") {
                this.toastController.create({
                    message: data["error"],
                    duration: 3000
                }).then((toastr) => {
                    toastr.present();
                });
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
