import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { LanguageService } from 'src/app/api/language.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss'],
})
export class PersonalSettingsComponent implements OnInit {

  constructor(public appService: AppService, public languageService: LanguageService, private translate: TranslatePipe) {
  }

  languageId = this.languageService.currentLanguage.id ;

  ngOnInit() {}

  public changeLanguage() {
    this.languageService.saveLanguageSettingLocally(this.languageId);
    this.languageService.setLanguage(this.languageId);
  }
  public changeMode() {
    this.appService.saveDarkModeSettingLocally(this.appService.darkMode);
    this.appService.setActiveTheme();
  }
}
