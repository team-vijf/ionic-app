import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/models/building.model';
import { BuildingService } from 'src/app/api/building.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent implements OnInit {

  buildings: Building[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private buildingService: BuildingService) {
      this.buildings = this.route.snapshot.parent.parent.parent.data['buildings'];
   }

  ngOnInit() {
    // maybe for future?
    // setInterval(() => {
    //   this.buildingService.getBuildings().subscribe((data) => {
    //     this.buildings = data;
    //     this.buildingService.buildings = data;
    //   });
    // }, 5000);
  }
  public onClick(id) {
    this.router.navigate(["app", "buildings", id]);
  }
}
