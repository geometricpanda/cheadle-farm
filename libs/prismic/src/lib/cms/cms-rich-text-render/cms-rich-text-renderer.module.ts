import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRichTextRendererComponent } from './cms-rich-text-renderer.component';
import { CmsRichTextRendererPipe } from './cms-rich-text-renderer.pipe';

@NgModule({
  declarations: [
    CmsRichTextRendererComponent,
    CmsRichTextRendererPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmsRichTextRendererComponent
  ]
})
export class CmsRichTextRendererModule {

}
