import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss'],
})
export class PersonalSettingsComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {}

  public changeMode() {
    this.appService.saveDarkModeSettingLocally(this.appService.darkMode);
    this.appService.setActiveTheme();
  }
}
