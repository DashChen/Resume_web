import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValueByKeyFromList'
})
export class GetValueByKeyFromListPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    const items = args[0];
    const compareKey = args[1];
    const returnKey = args[2];
    const item = items.find((v: { [x: string]: any; }) => v[compareKey] === value);
    if (!item || !item[returnKey]) {
      console.warn('no map item or key');
      return value;
    }
    return item[returnKey];
  }

}
