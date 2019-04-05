import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingService } from 'src/app/api/building.service';
import { Floor } from 'src/app/models/floor.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit {

  building: Building;

  constructor(private route: ActivatedRoute,
    private buildingService: BuildingService,
    private router: Router) { }

  ngOnInit() {
    const buildings = this.buildingService.buildings;
    const params = this.route.snapshot.params;
    const buildingId = params.buildingId;
    if (!buildings) {
      this.buildingService.getBuildingById(buildingId).subscribe((building) => {
        this.building = building;
      });
    } else {
      for (const building of buildings) {
        if (building.id === params.buildingId) {
          this.building = building;
        }
      }
    }
  }
  public getAmountFreeClassrooms(floor: Floor) {
    const freeClasses = floor.classrooms.filter((classroom) => {
      return classroom.free;
    });
    return `er zijn nog ${freeClasses.length} klassen vrij`;
  }
  public onClick(buildingId, floorId) {
    this.router.navigate(["app", "buildings", buildingId, floorId]);
  }
}
