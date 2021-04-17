import { Component, Input } from '@angular/core';
import { TilesSliceInterface } from '../../../store/slices';

@Component({
  selector: 'app-cms-tiles',
  templateUrl: './cms-tiles.component.html',
  styleUrls: ['./cms-tiles.component.scss']
})
export class CmsTilesComponent {
  @Input() slice: TilesSliceInterface;
}
