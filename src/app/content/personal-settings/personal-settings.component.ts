import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss'],
})
export class PersonalSettingsComponent implements OnInit {

  nightMode: boolean;
  constructor(public appService: AppService) { }

  ngOnInit() {}

  public changeMode() {
    this.appService.setActiveTheme(this.nightMode);
  }
}
