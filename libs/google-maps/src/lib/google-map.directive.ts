import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  Renderer2
} from '@angular/core';
import { DOCUMENT,  } from '@angular/common';


@Directive({
  selector: '[cheadleFarmGoogleMap]'
})
export class GoogleMapDirective implements OnChanges {

  @Input() apiKey: string;
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() showMap = false;
  @Input() zoom: number;

  mapsApi;
  map;
  marker;

  constructor(private renderer: Renderer2,
              private elRef: ElementRef,
              @Inject(DOCUMENT) private _document: Document) {
  }

  ngOnChanges(changes) {
    if(changes.showMap?.currentValue === true) {
      this.loadMapsScript();
    }
  }

  callback() {
    this.mapsApi = window['google'].maps;
    this.loadMap();
  }

  loadMapsScript() {
    if (window['google']?.maps) {
      return this.callback();
    }

    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=initMap`;
    this.renderer.appendChild(this._document.body, script);
    window['initMap'] = () => this.callback();
  }

  loadMap() {
    const mapConfig = {
      center: {
        lat: this.latitude,
        lng: this.longitude
      },
      zoom: this.zoom,
      disableDefaultUI: true
    };

    this.map = new this.mapsApi.Map(this.elRef.nativeElement, mapConfig);
    this.plotMarker();
  }

  plotMarker() {

    const latlng = {
      lat: this.latitude,
      lng: this.longitude
    };

    this.marker = new this.mapsApi.Marker({
      position: latlng,
      map: this.map
    });

  }

}
