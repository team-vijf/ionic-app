import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../models/classroom.model';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.page.html',
  styleUrls: ['./classroom.page.scss'],
})
export class ClassroomPage implements OnInit {

  classroom: Classroom;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.classroom = this.route.snapshot.data["classroom"];
  }


  ngOnInit() {
  }

}
