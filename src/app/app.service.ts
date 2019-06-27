import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  constructor(
    private toastController: ToastController
    ) {
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
  public showToaster(msg: string, duration: number) {
    this.toastController.create({
      message: msg,
      duration,
      position: 'top',
      cssClass: 'margin-top',
    }).then((toastr) => {
      toastr.present();
    });
  }
  public saveDarkModeSettingLocally(bool: boolean) {
    localStorage.setItem("darkMode", bool.toString());
  }
}
