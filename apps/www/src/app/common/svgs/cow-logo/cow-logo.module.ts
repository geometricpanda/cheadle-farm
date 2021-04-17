import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CowLogoComponent } from './cow-logo.component';


@NgModule({
  declarations: [CowLogoComponent],
  exports: [
    CowLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CowLogoModule { }
