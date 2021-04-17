import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsTileComponent } from './cms-tile/cms-tile.component';
import { CmsTilesComponent } from './cms-tiles/cms-tiles.component';
import { RouterModule } from '@angular/router';
import { CmsRichTextRendererModule } from '../cms-rich-text-render/cms-rich-text-renderer.module';
import { GridModule } from '../../common';
import { CmsTileImgPipe } from './cms-tile/cms-tile-img.pipe';

@NgModule({
  declarations: [
    CmsTileComponent,
    CmsTilesComponent,
    CmsTileImgPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CmsRichTextRendererModule,
    GridModule
  ],
  exports: [
    CmsTileComponent,
    CmsTilesComponent
  ],
})
export class CmsTilesModule {
}
