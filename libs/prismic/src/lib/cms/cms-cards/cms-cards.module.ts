import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CmsCardComponent } from './cms-card/cms-card.component';
import { CmsCardsComponent } from './cms-cards/cms-cards.component';
import { CmsRichTextRendererModule } from '../cms-rich-text-render/cms-rich-text-renderer.module';
import { GridModule } from '../../common';

@NgModule({
  declarations: [
    CmsCardComponent,
    CmsCardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CmsRichTextRendererModule,
    GridModule,
  ],
  exports: [
    CmsCardComponent,
    CmsCardsComponent
  ],
})
export class CmsCardsModule {
}
