import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { FloorService } from 'src/app/api/floor-service';
import { Classroom } from 'src/app/models/classroom.model';
import { EMPTY } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss'],
})
export class FloorMapComponent implements OnInit, OnDestroy {
  map: SafeHtml;
  intervalId;
  @Input() floorId: string;
  constructor(
    private floorService: FloorService,
    private sanitizer: DomSanitizer,
    public navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.floorService.getFloorMap(this.floorId).subscribe(data => {
      if (data["status"] === "failed") {
        return EMPTY;
      } else {
        this.map = this.sanitizer.bypassSecurityTrustHtml(data["floorplan"]);
      }
    });
    this.intervalId = setInterval(() => {
      this.refreshPlan();
    }, 2000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  refreshPlan() {
    if (this.floorId) {
      this.floorService.getFloor(this.floorId).subscribe(floorData => {
        if (floorData['status'] === 'ok') {
          for (let i = 0; i < floorData.classrooms.length; i++) {
            const element = floorData.classrooms[i];
            this.setColor(this.getClassroomByClasscode(element.classcode), this.getColor(element));
          }
        }
      });
    }

  }

  getClassroomByClasscode(code: string): HTMLCollection {
    // SVG must have id floorMap and classrooms must have class: "classroom" with classcode as id.
    const floormap = document.getElementById("floorMap");
    if (floormap) {
      return floormap.getElementsByClassName(code);
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
  setColor(elements: HTMLCollection, color: string) {
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.setAttribute("fill", color);
      }
    }
  }

}
