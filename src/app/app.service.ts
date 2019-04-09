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
  public activeTheme;
  public activeImage;

  public darkMode: boolean;

  constructor() {
   }

  setActiveTheme() {
    if (this.darkMode) {
      this.activeTheme = this.themes.dark;
      this.activeImage = this.images.dark;

    } else {
      this.activeTheme = this.themes.light;
      this.activeImage = this.images.light;

    }
  }
  public saveDarkModeSettingLocally(bool: boolean) {
    localStorage.setItem("darkMode", bool.toString());
  }
}
