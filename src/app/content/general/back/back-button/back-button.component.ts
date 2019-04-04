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
  public get basePage() {
    if (this.basePages.includes(this.router.url)) {
      return true;
    }
    return false;
  }
  constructor(private location: Location, public router: Router) { }

  ngOnInit() {
  }

  public getTitle() {
    switch (this.router.url) {
      case (this.basePages[0]): {
        return "Gebouwen";
      }
      case (this.basePages[1]): {
        return "Home";
      }
      case (this.basePages[2]): {
        return "Instellingen";
      }
    }
  }
  public goBack() {
    if (!this.basePage) {
      this.location.back();
    }
  }
}
