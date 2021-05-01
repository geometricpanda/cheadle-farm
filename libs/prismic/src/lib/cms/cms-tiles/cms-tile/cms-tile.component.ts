import { Component, Input } from '@angular/core';
import { TileInterface } from '../../../store/slices';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-cms-tile]',
  templateUrl: './cms-tile.component.html',
  styleUrls: ['./cms-tile.component.css']
})
export class CmsTileComponent {
  @Input() tile: TileInterface;
}
