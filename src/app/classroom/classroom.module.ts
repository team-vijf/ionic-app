import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClassroomPage } from './classroom.page';
// import { ClassroomResolverService } from '../resolver/classroom-resolver-service';

const routes: Routes = [
  {
    path: '',
    // resolve: {classroom : ClassroomResolverService},
    component: ClassroomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClassroomPage]
})
export class ClassroomPageModule {}
