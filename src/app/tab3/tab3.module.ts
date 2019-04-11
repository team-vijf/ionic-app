import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalSettingsComponent } from '../content/personal-settings/personal-settings.component';
import { SharedModule } from '../shared.module';
export const tab3Routes: Routes = [

  {
    path: '',
    component: PersonalSettingsComponent
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(tab3Routes),
    SharedModule
  ],
  declarations: [
    PersonalSettingsComponent
  ]
})
export class Tab3PageModule {}
