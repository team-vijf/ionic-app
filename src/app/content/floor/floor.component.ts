import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Floor } from 'src/app/models/floor.model';
import { Building } from 'src/app/models/building.model';
import { FloorService } from 'src/app/api/floor-service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss'],
})
export class FloorComponent implements OnInit, OnDestroy {

  floor: Floor;
  building: Building;
  private intervalId;
  // dataLoaded: Promise<boolean> = Promise.resolve(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private floorService: FloorService) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const floorId = params.floorId;
    this.intervalId = setInterval(() => {
      this.floorService.getFloor(floorId).subscribe((data) => {
        this.floor = data;
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
doRefresh(event) {
  this.floorService.getFloor(this.floor.id).subscribe((data) => {
    setTimeout(() => {
      this.floor = data;
      event.target.complete();
    }, 200);
  });
}
}
