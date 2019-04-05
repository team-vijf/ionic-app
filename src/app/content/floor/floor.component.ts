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

    this.route.params.subscribe((params) => {
    const buildingId = params.buildingId;
    const floorId = params.floorId;
    this.building = this.buildingService.buildings.find((building) => {
      return building.id === params.buildingId;
    });
    if (!this.building) {
      this.buildingService.getBuildingById(buildingId).subscribe((_building) => {
        this.building = _building;
        this.setFloorByBuilding(floorId);
      });
    } else {
      this.setFloorByBuilding(floorId);
    }
  });
}
setFloorByBuilding(floorId) {
  this.floor = this.building.floors.find((floor) => {
    return floor.id === floorId;
  });
  if (this.floor) {
    this.dataLoaded = Promise.resolve(true);
  }
}
getBuildingAdress() {
  return this.building.streetName + " " + this.building.buildingNumber;
}
onClick(classcode: string) {
  this.router.navigate(["app", "buildings", this.building.id, this.floor.id, classcode]);
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
    }, 1500);
  });
}
}
