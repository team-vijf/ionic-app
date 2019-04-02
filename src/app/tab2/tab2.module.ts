import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { BuildingComponent } from '../content/building/building.component';
import { BuildingsComponent } from '../content/buildings/buildings.component';
export const tab2Routes: Routes = [
  {
    path: '',
    component: BuildingsComponent,
  },
  {
    path: ':buildingId',
    component: BuildingComponent
  }
];
@NgModule({
  exports: [RouterModule],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(tab2Routes)
  ],
  declarations: [
    BuildingsComponent,
    BuildingComponent
    ]
})
export class Tab2PageModule {}

