import { Component, Input } from '@angular/core';
import { CardsSliceInterface } from '../../../store/slices';

@Component({
  selector: 'app-cms-cards',
  templateUrl: './cms-cards.component.html',
  styleUrls: ['./cms-cards.component.css']
})
export class CmsCardsComponent {
  @Input() slice: CardsSliceInterface;
}
