import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/models/building.model';
import { FloorService } from 'src/app/api/floor-service';
import { BuildingService } from 'src/app/api/building.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss'],
})
export class FloorComponent implements OnInit, OnDestroy {

  building: Building;
  private intervalId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public floorService: FloorService,
    public buildingService: BuildingService) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const floorId = params.floorId;
    this.intervalId = setInterval(() => {
      this.floorService.getFloor(floorId).subscribe((data) => {
        this.floorService.floor.classrooms = data["classrooms"];
      });
    }, 5000);
}
ngOnDestroy () {
  clearInterval(this.intervalId);
}
getBuildingAdress() {
  return this.building.streetname + " " + this.building.buildingnumber;
}
onClick(classcode: string) {
  clearInterval(this.intervalId);
  this.router.navigate(["app", "classroom", classcode]);
}
// doRefresh(event) {
//   this.floorService.getFloor(this.floor.id).subscribe((data) => {
//     setTimeout(() => {
//       this.floor = data;
//       event.target.complete();
//     }, 200);
//   });
// }
}
