import { Component, OnInit } from '@angular/core';
import { Building } from '../models/building.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../models/classroom.model';
import { AppService } from '../app.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FloorService } from '../api/floor-service';
import { ToastController } from '@ionic/angular';
import { EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  plan: any;
  buildings: Building[];
  buildingId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public appService: AppService,
    private sanitizer: DomSanitizer,
    private floorService: FloorService,
    private toastController: ToastController
  ) {
    this.buildings = this.route.snapshot.parent.parent.data['buildings'];
    this.plan = this.route.snapshot.data['floorplan'];
  }

  ngOnInit() {
    this.floorService.getFloorMap("HL15-4").subscribe(data => {
      if (data["status"] === "failed") {
        this.toastController.create({
          message: data["error"],
          duration: 3000
        }).then((toastr) => {
          toastr.present();
        });
        return EMPTY;
      } else {
        this.plan = data;
      }
    });
  }
  // public searchForClassrooms() {
  //   const building = this.buildings.find((item) => {
  //     return item.id === this.buildingId;
  //   });
  // const classroom = this.findFirstAvailibleRoom(building);
  // this.router.navigate(["app", "classroom", classroom.classcode]);
  // }
  public routeToBuildingPage() {
    this.router.navigate(["app", "buildings", this.buildingId]);
  }

  // private findFirstAvailibleRoom(building: Building): Classroom {
  //   for (let i = 0; i < building.floors.length; i++) {
  //     const floor = building.floors[i];
  //     for (let j = 0; j < floor.classrooms.length; j++) {
  //       const classroom = floor.classrooms[j];
  //       if (classroom.free) {
  //         return classroom;
  //       }
  //     }
  //   }
  // }
}
