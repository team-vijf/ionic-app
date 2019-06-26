import { NgModule } from '@angular/core';
import { TranslatePipe } from './content/pipes/translate.pipe';
import { FloorMapComponent } from './content/floor-map/floor-map.component';


@NgModule({
  providers: [
    TranslatePipe
  ],
  imports: [
  ],
  exports: [
    TranslatePipe,
    FloorMapComponent
  ],
  declarations: [
    TranslatePipe,
    FloorMapComponent
  ]
})
export class SharedModule {}
