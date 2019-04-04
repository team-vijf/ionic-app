import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Tab2Page } from '../tab2/tab2.page';
import { BackButtonComponent } from '../content/general/back/back-button/back-button.component';
import { Tab3Page } from '../tab3/tab3.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    Tab2Page,
    Tab3Page,
    BackButtonComponent
  ]
})
export class TabsPageModule {}
