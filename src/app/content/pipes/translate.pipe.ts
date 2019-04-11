import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { LanguageService } from 'src/app/api/language.service';

@Pipe({ name: 'translate',  pure: false })
export class TranslatePipe implements PipeTransform {

    constructor(private languageService: LanguageService) {
    }

    transform(value: string): string {
        const translateValue = this.languageService.currentLanguage.translations[value];
        if (translateValue === '' || translateValue === undefined) {
          return value;
        } else {
          return this.languageService.currentLanguage.translations[value];
        }
    }

}
