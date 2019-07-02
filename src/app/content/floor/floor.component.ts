import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/models/building.model';
import { FloorService } from 'src/app/api/floor-service';
import { BuildingService } from 'src/app/api/building.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { OrdinalNumberSuffixPipe } from '../pipes/ordinal-number-suffix.pipe';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss'],
})
export class FloorComponent implements OnInit, OnDestroy {
  showMap = false;
  private intervalId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public floorService: FloorService,
    private translatePipe: TranslatePipe,
    private ordinalSuffixPipe: OrdinalNumberSuffixPipe,
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
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  getBuildingAdress() {
    return this.buildingService.building.streetname + " " + this.buildingService.building.buildingnumber;
  }
  goToClassroomView(classcode: string) {
    this.router.navigate(["app", "classroom", classcode]);
  }
  showMapButtonClicked() {
    this.showMap = !this.showMap;
  }
  getFloorName() {
    // first get floor number (buildingservice + id van floor)
    const floor = this.buildingService.building.floors.filter(element => {
      if (element.id === this.floorService.floor.id) {
        return element;
      }
    });
    switch (floor[0].floornumber) {
      case 0:
        return this.translatePipe.transform("F_Ground_Floor");
      default:
        return (this.ordinalSuffixPipe.transform(floor[0].floornumber) + this.translatePipe.transform("F_Floor_Of") + " ");
    }
  }
}
