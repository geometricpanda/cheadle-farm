import { Component, Input } from '@angular/core';
import { CardInterface } from '../../../store/slices';

@Component({
  selector: 'app-cms-card',
  templateUrl: './cms-card.component.html',
  styleUrls: ['./cms-card.component.css'],
})
export class CmsCardComponent {
  @Input() card: CardInterface;
}
