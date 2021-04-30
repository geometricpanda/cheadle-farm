import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsDefinitionListComponent } from './cms-definition-list.component';

import { CmsRichTextRendererModule } from '../cms-rich-text-render/cms-rich-text-renderer.module';
import { GridModule } from '../../common';

@NgModule({
  declarations: [
    CmsDefinitionListComponent
  ],
  imports: [
    CommonModule,
    CmsRichTextRendererModule,
    GridModule
  ],
  exports: [
    CmsDefinitionListComponent
  ]
})
export class CmsDefinitionListModule {

}
