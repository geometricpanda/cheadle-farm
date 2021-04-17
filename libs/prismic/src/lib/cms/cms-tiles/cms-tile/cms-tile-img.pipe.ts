import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmsTileImg'
})
export class CmsTileImgPipe implements PipeTransform {

  transform(value: string): string {
    return `url(${value})`;
  }

}
