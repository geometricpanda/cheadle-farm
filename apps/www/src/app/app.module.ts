import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { GoogleMapsModule } from '@cheadle-farm/google-maps';
import { MenuModule } from '@cheadle-farm/menu';
import { AppStoreModule } from '@cheadle-farm/prismic';


import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './common/footer/footer.module';
import { HeaderModule } from './common/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppStoreModule,
    AppRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    GoogleMapsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
