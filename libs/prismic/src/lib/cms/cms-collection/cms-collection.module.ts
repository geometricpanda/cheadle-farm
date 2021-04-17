import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CmsCollectionComponent } from './cms-collection.component';
import { CmsRichTextRendererModule } from '../cms-rich-text-render/cms-rich-text-renderer.module';
import { GridModule } from '../../common';

@NgModule({
  declarations: [
    CmsCollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CmsRichTextRendererModule,
    GridModule
  ],
  exports: [
    CmsCollectionComponent
  ]
})
export class CmsCollectionModule {
}
