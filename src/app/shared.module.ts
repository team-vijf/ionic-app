import { NgModule } from '@angular/core';
import { TranslatePipe } from './content/pipes/translate.pipe';
import { FloorMapComponent } from './content/floor-map/floor-map.component';
import { OverlayComponent } from './content/general/overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  providers: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    TranslatePipe,
    FloorMapComponent,
    OverlayComponent
  ],
  declarations: [
    TranslatePipe,
    FloorMapComponent,
    OverlayComponent
  ]
})
export class SharedModule {}
