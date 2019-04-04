import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalNumberSuffix'
})
export class OrdinalNumberSuffixPipe implements PipeTransform {

  transform(value: Number, args?: any): String {
    let suffix = "e";
    switch (value) {
      case 1: {
        suffix = "ste";
        break;
      }
      case 2: {
        suffix = "de";
        break;
      }
    }
    return value + suffix;
  }

}
