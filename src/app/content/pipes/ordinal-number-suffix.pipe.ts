import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/api/language.service';

@Pipe({
  name: 'ordinalNumberSuffix'
})
export class OrdinalNumberSuffixPipe implements PipeTransform {

  constructor(private languageService: LanguageService) { }

  transform(value: Number, args?: any): String {
    if (this.languageService.currentLanguage.id === this.languageService.english.id) {
      let suffix = "th";
      switch (value) {
        case 1: {
          suffix = "st";
          break;
        }
        case 2: {
          suffix = "nd";
          break;
        }
        case 3: {
          suffix = "rd";
          break;
        }
      }
      return value + suffix;
    } else {
      let suffix = "e";
      switch (value) {
        case 1: {
          suffix = "ste";
          break;
        }
        case 2: {
          suffix = "de";
          break;
        }
      }
      return value + suffix;
    }
  }
}
