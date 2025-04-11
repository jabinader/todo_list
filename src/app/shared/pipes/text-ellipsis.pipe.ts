import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEllipsis',
  standalone: false
})
export class TextEllipsisPipe implements PipeTransform {

  transform(value: string, length?: number): string {
    if (value && length && length > 10) {
      return `${value}...`;
    } else if (value && length && length <= 10) {
      return value;
    }
    return '';
  }

}
