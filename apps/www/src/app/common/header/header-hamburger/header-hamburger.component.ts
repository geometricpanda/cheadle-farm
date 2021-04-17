import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-hamburger',
  templateUrl: './header-hamburger.component.html',
  styleUrls: ['./header-hamburger.component.scss'],
})
export class HeaderHamburgerComponent {

  @Output() clicked = new EventEmitter();

  onClick($event: MouseEvent) {
    $event.stopPropagation();
    this.clicked.emit();
  }

}
