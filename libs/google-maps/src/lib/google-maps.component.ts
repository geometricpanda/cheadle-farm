import { Component, Input } from '@angular/core';

@Component({
  selector: 'cheadle-farm-google-map',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent {
  @Input() staticUrl = '';
  @Input() apiKey = '';
  @Input() latitude = 53.26096;
  @Input() longitude = -2.4177;
  @Input() zoom = 13;
  @Input() showMap;
}
