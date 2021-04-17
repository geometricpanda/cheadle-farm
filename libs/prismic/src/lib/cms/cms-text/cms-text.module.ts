import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsTextComponent } from './cms-text.component';
import { CmsRichTextRendererModule } from '../cms-rich-text-render/cms-rich-text-renderer.module';
import { GridModule } from '../../common';

@NgModule({
  declarations: [
    CmsTextComponent,
  ],
  imports: [
    CommonModule,
    CmsRichTextRendererModule,
    GridModule
  ],
  exports: [
    CmsTextComponent,
  ],
})
export class CmsTextModule {
}
