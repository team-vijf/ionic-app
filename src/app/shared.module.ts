import { NgModule } from '@angular/core';
import { TranslatePipe } from './content/pipes/translate.pipe';


@NgModule({
  providers: [
    TranslatePipe
  ],
  imports: [
  ],
  exports: [ TranslatePipe],
  declarations: [
    TranslatePipe
  ]
})
export class SharedModule {}
