import { Component, HostListener } from '@angular/core';
import { environment } from '../environments/environment';
import { AppLinksService } from './app-links.service';

@Component({
  selector: 'cheadle-farm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  googleMapsApikey = environment.googleMapsPublicKey;
  googleMapsLatitude = 53.26096;
  googleMapsLongitude = -2.4177;
  googleMapsZoom = 12;
  googleMapsStaticUrl = 'https://www.google.com/maps/place/Traditional+Farmhouse+Beef/@53.260927,-2.4198867,17z/data=!4m5!3m4!1s0x487a566861fb6941:0x8223390735149168!8m2!3d53.2609269!4d-2.4176983';
  googleMapsShow = false;

  constructor(public appLinks: AppLinksService) {
  }

  @HostListener('window:scroll')
  onScroll() {
    this.googleMapsShow = true;
  }
}
