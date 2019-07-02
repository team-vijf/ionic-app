import { Component, OnInit } from '@angular/core';
import { Building } from '../models/building.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../models/classroom.model';
import { AppService } from '../app.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FloorService } from '../api/floor-service';
import { EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  buildings: Building[];
  floorUuid: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public appService: AppService,
    private sanitizer: DomSanitizer,
    private floorService: FloorService
  ) {
    this.buildings = this.route.snapshot.parent.parent.data['buildings'];
    for (let i = 0; i < this.buildings.length; i++) {
      const building = this.buildings[i];
      if (building.streetname === "Heidelberglaan" && building.buildingnumber === 15) {
        for (let i = 0; i < building.floors.length; i++) {
          const floor = building.floors[i];
          if (floor.floornumber === 4) {
            this.floorUuid = floor.id;
          }
        }
      }
    }
  }

  ngOnInit() {
  }
  // public searchForClassrooms() {
  //   const building = this.buildings.find((item) => {
  //     return item.id === this.buildingId;
  //   });
  // const classroom = this.findFirstAvailibleRoom(building);
  // this.router.navigate(["app", "classroom", classroom.classcode]);
  // }


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
