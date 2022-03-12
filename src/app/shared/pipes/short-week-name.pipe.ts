import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortWeekName',
  pure: false,
})
export class ShortWeekNamePipe implements PipeTransform {
  transform(value: String, args?: any): any {
    if (!value) return null;

    return value.substring(0, 3);
  }
}
