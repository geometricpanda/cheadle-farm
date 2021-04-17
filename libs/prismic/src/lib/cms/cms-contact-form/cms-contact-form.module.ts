import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CmsContactFormComponent } from './cms-contact-form.component';
import { GridModule } from '../../common';


@NgModule({
  declarations: [
    CmsContactFormComponent
  ],
  exports: [
    CmsContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule
  ]
})
export class CmsContactFormModule {
}
