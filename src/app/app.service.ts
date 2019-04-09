import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly themes = {
    light: "light-theme",
    dark: "dark-theme"
  };
  readonly images = {
    light: "/assets/hu-logo-nl.svg",
    dark: "/assets/hu-logo-dark.svg"
  };
  public activeTheme = this.themes.light;
  public activeImage = this.images.light;

  constructor() { }

  setActiveTheme(bool) {
    if (bool) {
      this.activeTheme = this.themes.dark;
      this.activeImage = this.images.dark;

    } else {
      this.activeTheme = this.themes.light;
      this.activeImage = this.images.light;

    }
  }
}
