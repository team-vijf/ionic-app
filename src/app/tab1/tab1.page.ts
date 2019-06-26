import { Component, OnInit } from '@angular/core';
import { Building } from '../models/building.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../models/classroom.model';
import { AppService } from '../app.service';
import { DomSanitizer } from '@angular/platform-browser';

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
    private sanitizer: DomSanitizer
    ) {
    this.buildings = this.route.snapshot.parent.parent.data['buildings'];
  }

  ngOnInit() {
    this.plan = this.sanitizer.bypassSecurityTrustHtml(this.route.snapshot.data['floorplan'].floorplan);
  }
  // public searchForClassrooms() {
  //   const building = this.buildings.find((item) => {
  //     return item.id === this.buildingId;
  //   });
    // const classroom = this.findFirstAvailibleRoom(building);
    // this.router.navigate(["app", "classroom", classroom.classcode]);
  // }
  public routeToBuildingPage() {
    this.router.navigate(["app" , "buildings", this.buildingId]);
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
