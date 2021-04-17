import { Component, Input } from '@angular/core';
import { HeroSliceInterface } from '../../store/slices';

@Component({
  selector: 'app-cms-hero',
  templateUrl: './cms-hero.component.html',
  styleUrls: ['./cms-hero.component.scss']
})
export class CmsHeroComponent {
  @Input() slice: HeroSliceInterface;
}
