import { NgModule } from '@angular/core';
import { TranslatePipe } from './content/pipes/translate.pipe';
import { FloorMapComponent } from './content/floor-map/floor-map.component';
import { OverlayComponent } from './content/general/overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrdinalNumberSuffixPipe } from './content/pipes/ordinal-number-suffix.pipe';


@NgModule({
  providers: [
    TranslatePipe,
    OrdinalNumberSuffixPipe
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    TranslatePipe,
    OrdinalNumberSuffixPipe,
    FloorMapComponent,
    OverlayComponent
  ],
  declarations: [
    TranslatePipe,
    OrdinalNumberSuffixPipe,
    FloorMapComponent,
    OverlayComponent
  ]
})
export class SharedModule {}
