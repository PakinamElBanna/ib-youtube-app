import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersSuffix'
})
export class NumbersSuffixPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const suffixes = ['K', 'M', 'G', 'T', 'P', 'E'];

    if (Number.isNaN(value)) {
          return null;
        }

    if (value < 1000) {
          return value;
        }

    const exp = Math.floor(Math.log(value) / Math.log(1000));

    return (
          (value / Math.pow(1000, exp)).toFixed(args) +
          suffixes[exp - 1]
        );

  }

}


