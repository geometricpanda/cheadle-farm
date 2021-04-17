import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[col]',
  styleUrls: ['./col.component.scss'],
  template: `
    <ng-content></ng-content>`
})
export class ColComponent {
  @Input() col;
  @Input() md;
  @Input() lg;
}
