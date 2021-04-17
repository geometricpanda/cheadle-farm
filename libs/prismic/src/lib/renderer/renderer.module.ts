import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './renderer.component';
import { LoadingModule } from '../loading/loading.module';

import { CmsHeroModule, CmsTextModule, CmsCardsModule, CmsTilesModule, CmsCollectionModule } from '../cms';
import { GridModule } from '../common';

@NgModule({
  declarations: [
    RendererComponent
  ],
  exports: [
    RendererComponent
  ],
  imports: [
    CommonModule,
    CmsCardsModule,
    CmsTextModule,
    CmsHeroModule,
    LoadingModule,
    CmsTilesModule,
    CmsCollectionModule,
    GridModule,
  ],
})
export class RendererModule {
}
