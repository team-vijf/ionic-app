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
  dataLoaded: Promise<boolean> = Promise.resolve(false);
  constructor(private route: ActivatedRoute, private buildingService: BuildingService) {

  }

  ngOnInit() {
    let building = this.buildingService.building;
    this.route.params.subscribe((params) => {
    const buildingId = params.buildingId;
    const floorId = params.floorId;
    if (!building || building.id !== buildingId) {
      this.buildingService.getBuildingById(buildingId).subscribe((_building) => {
        this.buildingService.building = _building;
        building = _building;
        this.setFloorByBuilding(building, floorId);
      });
    } else {
      this.setFloorByBuilding(building, floorId);
    }
  });
}
setFloorByBuilding(building: Building, floorId) {
  building.floors.forEach(floor => {
    if (floor.id === floorId) {
      this.floor = floor;
      this.dataLoaded = Promise.resolve(true);
    }
  });
}
}
