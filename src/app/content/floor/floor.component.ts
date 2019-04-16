import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Floor } from 'src/app/models/floor.model';
import { BuildingService } from 'src/app/api/building.service';
import { Building } from 'src/app/models/building.model';
import { FloorService } from 'src/app/api/floor-service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss'],
})
export class FloorComponent implements OnInit {

  @ViewChild("list") list: ElementRef;
  floor: Floor;
  building: Building;
  dataLoaded: Promise<boolean> = Promise.resolve(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private buildingService: BuildingService,
    private floorService: FloorService) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const buildingId = params.buildingId;
    const floorId = params.floorId;
    let building = this.buildingService.buildings.find((_building) => {
      return _building.id === params.buildingId;
    });
    if (!building) {
      this.buildingService.getBuildingById(buildingId).subscribe((_building) => {
        building = _building;
        this.setFloorByBuilding(building, floorId);
      });
    } else {
      this.setFloorByBuilding(building, floorId);
    }
}
setFloorByBuilding(building, floorId) {
  this.building = building;
  this.floor = building.floors.find((floor) => {
    return floor.id === floorId;
  });
  if (this.floor) {
    this.dataLoaded = Promise.resolve(true);
  }
}
getBuildingAdress() {
  return this.building.streetname + " " + this.building.buildingnumber;
}
onClick(classcode: string) {
  this.router.navigate(["app", "classroom", classcode]);
}
doRefresh(event) {
  this.floorService.getFloor(this.floor.id).subscribe((data) => {
    // dit kan later weg om de app te "optimizen" :)
    setTimeout(() => {
      const indexCurrentBuilding = this.buildingService.buildings.indexOf(this.building);
      const indexCurrentFloor = this.buildingService.buildings[indexCurrentBuilding].floors.indexOf(this.floor);
      this.buildingService.buildings[indexCurrentBuilding].floors[indexCurrentFloor] = data;
      this.floor = data;
      event.target.complete();
    }, 200);
  });
}
}
