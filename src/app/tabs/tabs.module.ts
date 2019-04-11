import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Tab2Page } from '../tab2/tab2.page';
import { BackButtonComponent } from '../content/general/back/back-button/back-button.component';
import { Tab3Page } from '../tab3/tab3.page';
import { Tab1Page } from '../tab1/tab1.page';
import { ClassroomPage } from '../classroom/classroom.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    ClassroomPage,
    BackButtonComponent
  ]
})
export class TabsPageModule {}
