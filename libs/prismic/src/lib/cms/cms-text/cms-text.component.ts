import { Component, Input } from '@angular/core';
import { TextSliceInterface } from '../../store/slices';

@Component({
  selector: 'app-cms-text',
  templateUrl: './cms-text.component.html',
  styleUrls: ['./cms-text.component.css'],
})
export class CmsTextComponent {
  @Input() slice: TextSliceInterface;
}
