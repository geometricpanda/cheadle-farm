import { Component, Input } from '@angular/core';
import { PrismicRichTextItemType } from '../../services/prismic';
import { RichTextInterface } from '../../store/slices';

@Component({
  selector: 'app-cms-rich-text-renderer',
  templateUrl: './cms-rich-text-renderer.component.html'
})
export class CmsRichTextRendererComponent {
  TYPE = PrismicRichTextItemType;
  @Input() text: RichTextInterface[];
}
