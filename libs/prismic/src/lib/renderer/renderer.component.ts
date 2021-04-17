import { Component, Input } from '@angular/core';
import { PRISMIC_SLICE } from '../services/prismic';
import { PageInterface } from '../store/pages/pages.reducer';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html'
})
export class RendererComponent {
  SLICE = PRISMIC_SLICE;
  @Input() content: PageInterface;
}
