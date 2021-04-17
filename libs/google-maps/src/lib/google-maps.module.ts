import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps.component';
import { GoogleMapDirective } from './google-map.directive';

@NgModule({
  declarations: [
    GoogleMapsComponent,
    GoogleMapDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoogleMapsComponent
  ]
})
export class GoogleMapsModule {
}
