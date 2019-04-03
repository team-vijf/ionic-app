import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalNumberSuffix'
})
export class OrdinalNumberSuffixPipe implements PipeTransform {

  transform(value: Number, args?: any): String {
    let suffix = "e";
    if (value === 1) {
      suffix = "ste";
    }
    return value + suffix;
  }

}
