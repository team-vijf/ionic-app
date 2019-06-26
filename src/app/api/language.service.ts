import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly dutch = dutchTranslation;
  readonly english = englishTranslation;

  public currentLanguage;
  constructor() { }

  languages = [this.dutch, this.english];

  setLanguage(key: string) {
    if (key === this.dutch.id) {
      this.currentLanguage = this.dutch;
    } else if (key === this.english.id) {
      this.currentLanguage = this.english;
    } else {
      this.currentLanguage = this.english;
    }

  }
  public saveLanguageSettingLocally(key: string) {
    localStorage.setItem("language", key);
  }
}

export const dutchTranslation = {
  id: "nl",
  name: "Nederlands",
  translations: {
    "F_Room_Avaliability": "Lokaalbezetting",
    // tslint:disable-next-line: max-line-length
    "F_Click_On_Buildings": "Klik op \"Gebouwen\" om te zoeken naar vrije gebouwen, of verander wat installingen in het  \"Instellingen\" tabje",
    "F_Building": "Gebouw",
    "F_Buildings": "Gebouwen",
    "F_Settings": "Instellingen",
    "F_Ground_Floor": "Begane grond",
    "F_Free": "Vrij",
    "F_Nothing_Free": "Bezet",
    "F_Floor_Of": "verdieping van",
    "F_Classroom": "Klaslokaal",
    "F_Classroom_Free": "Dit lokaal is vrij",
    "F_Classroom_Not_Free": "Dit lokaal is bezet",
    "F_Back": "Terug",
    "F_Dark_Mode": "Donkere modus",
    "F_Language": "Taal",
    "F_Floor" : "verdieping",
    "F_No_Buildings_Here" : "Er zijn nog geen gebouwen. kijk hier later nog eens!",
    "F_No_Floors_Here" : "Er zijn geen verdiepingen voor dit gebouw... vreemd.",
    "F_No_Classrooms_Here" : "Geen klaslokalen op deze verdieping",
    "F_NoClassrooms" : "Geen klaslokalen"
  }
};
export const englishTranslation = {
  id: "en",
  name: "Engels",
  translations: {
    "F_Room_Avaliability": "Room occupancy",
    // tslint:disable-next-line: max-line-length
    "F_Click_On_Buildings": "Click on \"Buildings\" to look for free buildings or change some settings in the \"Settings\" tab",
    "F_Building": "Building",
    "F_Buildings": "Buildings",
    "F_Settings": "Settings",
    "F_Ground_Floor": "Ground floor",
    "F_Free": "Free",
    "F_Nothing_Free": "Occupied",
    "F_Floor_Of": "floor of",
    "F_Classroom": "Classroom",
    "F_Classroom_Free": "This classroom is free",
    "F_Classroom_Not_Free": "This classroom is occupied",
    "F_Back": "Back",
    "F_Dark_Mode": "Dark mode",
    "F_Language": "Language",
    "F_Floor" : "floor",
    "F_No_Buildings_Here" : "There are no buildings here, check back later!",
    "F_No_Floors_Here" : "There are no floors known for this building... weird.",
    "F_No_Classrooms_Here" : "No Classrooms on this floor.",
    "F_NoClassrooms" : "No classrooms"
  }
};
