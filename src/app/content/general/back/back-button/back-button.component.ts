import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  private basePages = [
    "/app/buildings",
    "/app/home",
    "/app/settings"
  ];
  constructor(private location: Location, public router: Router) { }

  ngOnInit() {
  }

  public goBack() {
    if (!this.basePages.includes(this.router.url)) {
      this.location.back();
    }
  }
}
