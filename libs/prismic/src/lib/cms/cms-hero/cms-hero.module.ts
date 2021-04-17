import { NgModule } from '@angular/core';
import { CmsHeroComponent } from './cms-hero.component';
import { CommonModule } from '@angular/common';

import { CmsRichTextRendererModule } from '../cms-rich-text-render/cms-rich-text-renderer.module';
import { GridModule } from '../../common';

@NgModule({
  declarations: [
    CmsHeroComponent
  ],
  imports: [
    CommonModule,
    CmsRichTextRendererModule,
    GridModule
  ],
  exports: [
    CmsHeroComponent
  ]
})
export class CmsHeroModule {
}
