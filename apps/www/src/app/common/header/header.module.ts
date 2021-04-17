import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderHamburgerComponent } from './header-hamburger/header-hamburger.component';
import { HeaderCallComponent } from './header-call/header-call.component';
import { RouterModule } from '@angular/router';
import { HeaderAnchorlinkComponent } from './header-anchorlink/header-anchorlink.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { CowLogoModule } from '../svgs/cow-logo/cow-logo.module';

@NgModule({
    declarations: [
      HeaderComponent,
      HeaderHamburgerComponent,
      HeaderCallComponent,
      HeaderAnchorlinkComponent,
      HeaderLinksComponent
    ],
    exports: [
        HeaderComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    CowLogoModule
  ]
})
export class HeaderModule { }
