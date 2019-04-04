import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Floor } from 'src/app/models/floor.model';
import { BuildingService } from 'src/app/api/building.service';
import { Building } from 'src/app/models/building.model';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss'],
})
export class FloorComponent implements OnInit {

  floor: Floor;
  building: Building;
  dataLoaded: Promise<boolean> = Promise.resolve(false);

  constructor(private route: ActivatedRoute, private buildingService: BuildingService) {

  }

  ngOnInit() {
    this.building = this.buildingService.building;
    this.route.params.subscribe((params) => {
    const buildingId = params.buildingId;
    const floorId = params.floorId;
    if (!this.building || this.building.id !== buildingId) {
      this.buildingService.getBuildingById(buildingId).subscribe((_building) => {
        this.buildingService.building = _building;
        this.building = _building;
        this.setFloorByBuilding(floorId);
      });
    } else {
      this.setFloorByBuilding(floorId);
    }
  });
}
setFloorByBuilding(floorId) {
  this.building.floors.forEach(floor => {
    if (floor.id === floorId) {
      this.floor = floor;
      this.dataLoaded = Promise.resolve(true);
    }
  });
}
getBuildingAdress() {
  return this.building.streetName + " " + this.building.buildingNumber;
}
}
