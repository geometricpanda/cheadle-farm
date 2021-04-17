import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCmsRichTextRenderer'
})
export class CmsRichTextRendererPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br/>');
  }

}
