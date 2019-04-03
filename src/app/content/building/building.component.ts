import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingService } from 'src/app/api/building.service';

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
    this.route.params.subscribe((params) => {
      const buildingId = params.buildingId;
      if (!buildings) {
        this.buildingService.getBuildingById(buildingId).subscribe((building) => {
          this.building = building;
          this.buildingService.building = building;
        });
      } else {
        for (const building of buildings) {
          if (building.id === params.buildingId) {
            this.building = building;
            this.buildingService.building = building;
          }
        }
      }
      });
    }

  public onClick(buildingId, floorId) {
    this.router.navigate(["app", "buildings", buildingId, floorId]);
  }
}
