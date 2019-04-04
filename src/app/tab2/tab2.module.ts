import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuildingComponent } from '../content/building/building.component';
import { BuildingsComponent } from '../content/buildings/buildings.component';
import { FloorComponent } from '../content/floor/floor.component';
import { OrdinalNumberSuffixPipe } from '../content/pipes/ordinal-number-suffix.pipe';
export const tab2Routes: Routes = [
  {
    path: '',
    component: BuildingsComponent,
  },
  {
    path: ':buildingId',
    component: BuildingComponent
  },
  {
    path: ':buildingId/:floorId',
    component: FloorComponent
  },
  // {
  //   path: ':buildingId/:floorId/:classcode',
  //   loadChildren: '../classroom/classroom.module#ClassroomPageModule'
  // }
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
    BuildingComponent,
    FloorComponent,
    OrdinalNumberSuffixPipe
    ]
})
export class Tab2PageModule {}

