import { Component, OnInit, OnDestroy } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingService } from 'src/app/api/building.service';
import { Floor } from 'src/app/models/floor.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit, OnDestroy {

  building: Building;
  intervalId;

  constructor(private route: ActivatedRoute,
    private buildingService: BuildingService,
    private router: Router) { }

  ngOnInit() {
    const buildingId = this.route.snapshot.params["buildingId"];
    this.intervalId = setInterval(() => {
      this.buildingService.getBuildingById(buildingId).subscribe((data) => {
        this.building = data;
        const buildingIndex = this.buildingService.buildings.indexOf(data);
        this.buildingService.buildings[buildingIndex] = data;
      });
    }, 5000);
    const buildings = this.buildingService.buildings;
    if (!buildings) {
      this.buildingService.getBuildingById(buildingId).subscribe((building) => {
        this.building = building;
      });
    } else {
      for (const building of buildings) {
        if (building.id === buildingId) {
          this.building = building;
        }
      }
    }
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  public getAmountFreeClassrooms(floor: Floor) {
    const freeClasses = floor.classrooms.filter((classroom) => {
      return classroom.free === true;
    });
    return freeClasses.length;
  }
  public onClick(buildingId, floorId) {
    clearInterval(this.intervalId);
    this.router.navigate(["app", "buildings", buildingId, floorId]);
  }
}
