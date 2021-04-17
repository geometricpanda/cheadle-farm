import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererModule } from '@cheadle-farm/prismic';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';

@NgModule({
  declarations: [
    CmsComponent,
  ],
  imports: [
    CommonModule,
    RendererModule,
    CmsRoutingModule,
  ],
})
export class CmsModule {
}
