import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): any {
    const firstWord = value.split(' ').splice(0, 1);
    const remaining = value.split(' ').splice(1)
                      .map(word => word.charAt(0).toUpperCase() +
                                   word.substr(1).toLowerCase())
                                   .join('');
    return firstWord + remaining;
  }

}
