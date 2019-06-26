import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { TranslatePipe } from 'src/app/content/pipes/translate.pipe';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  private pageStack: string[] = [];
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
  constructor(
    public router: Router, private translatePipe: TranslatePipe
    ) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            if (this.pageStack.length > 10) {
                this.pageStack.pop();
            }
            if (this.pageStack.length === 0) {
                this.pageStack[0] = '/app/home';
            }
            this.pageStack.unshift(event.url);
        }
    })
     }

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
      this.pageStack.shift();
      const previousPage = this.pageStack.shift();
      this.router.navigateByUrl(previousPage);
    }
  }
}
