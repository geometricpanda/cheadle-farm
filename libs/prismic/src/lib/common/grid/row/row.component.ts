import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[row]',
  styleUrls: ['./row.component.scss'],
  template: `<ng-content></ng-content>`
})
export class RowComponent {
  @Input() around;
  @Input() center;
  @Input() vcenter;
}
