import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu.component';
import { CrossSvgComponent } from './cross-svg.component';

@NgModule({
  declarations: [
    MenuComponent,
    CrossSvgComponent
  ],
  imports: [
    CommonModule,
    A11yModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}
