import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[container]',
  styleUrls: ['./container.component.css'],
  template: `
    <ng-content></ng-content>`
})
export class ContainerComponent {

}
