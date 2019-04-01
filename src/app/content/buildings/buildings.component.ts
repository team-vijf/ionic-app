import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/models/building.model';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent implements OnInit {

  buildings: Building[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.buildings = this.route.snapshot.data['buildings'];
  }

}
