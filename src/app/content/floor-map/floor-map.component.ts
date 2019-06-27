import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { FloorService } from 'src/app/api/floor-service';
import { Classroom } from 'src/app/models/classroom.model';

@Component({
  selector: 'app-floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss'],
})
export class FloorMapComponent implements OnInit {
  @Input() map: SafeHtml;
  @Input() floorId: string;
  constructor(
    private floorService: FloorService
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.refreshPlan();
    }, 2000);
  }

  refreshPlan() {
    const classrooms = this.getClassroomsFromSVG();
    if (classrooms) {
      this.floorService.getFloor(this.floorId).subscribe(floorData => {
        for (let i = 0; i < floorData.classrooms.length; i++) {
          const element = floorData.classrooms[i];
          this.setColor(classrooms.namedItem(element.classcode), this.getColor(element));
        }
      });
    }
  }

  getClassroomsFromSVG() {
    // SVG must have id floorMap and classrooms must have class: "classroom" with classcode as id.
    const floormap = document.getElementById("floorMap")
    if (floormap) {
      return floormap.getElementsByClassName("classroom");
    } else {
      return null;
    }
  }
  getColor(classroom: Classroom): string {
    switch (classroom.free) {
      case true:
        return "green";
      case false:
        return "red";
      default:
        return "orange";
    }
  }
  setColor(element: Element, color: string) {
    if (element) {
      element.setAttribute("fill", color);
    }
  }

}
