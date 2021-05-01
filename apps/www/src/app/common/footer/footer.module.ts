import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { GridModule } from '@cheadle-farm/prismic';

@NgModule({
    declarations: [
      FooterComponent
    ],
    exports: [
        FooterComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    GridModule,
  ],
})
export class FooterModule { }
