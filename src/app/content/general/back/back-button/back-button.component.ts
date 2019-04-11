import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TranslatePipe } from 'src/app/content/pipes/translate.pipe';

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
  constructor(private location: Location, public router: Router, private translatePipe: TranslatePipe) { }

  ngOnInit() {
  }

  public getTitle() {
    switch (this.router.url) {
      case (this.basePages[0]): {
        return this.translatePipe.transform("F_Buildings");
      }
      case (this.basePages[1]): {
        return "Home";
      }
      case (this.basePages[2]): {
        return this.translatePipe.transform("F_Settings");
      }
    }
  }
  public goBack() {
    if (!this.basePage) {
      this.location.back();
    }
  }
}
