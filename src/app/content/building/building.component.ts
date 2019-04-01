import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit {

  building: Building;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const buildings = this.route.snapshot.data['buildings'];
    this.route.params.subscribe((params) => {
      for (const b of buildings) {
        if (b.Id === +params.buildingId) {
          this.building = b;
        }
      }
    });
  }

  getOrdinalNumberSuffix(number: Number): String {
    return "Verdieping " + number;
  }
}
