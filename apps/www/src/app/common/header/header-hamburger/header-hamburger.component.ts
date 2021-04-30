import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MenuService } from '@cheadle-farm/menu';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header-hamburger',
  templateUrl: './header-hamburger.component.html',
  styleUrls: ['./header-hamburger.component.scss'],
})
export class HeaderHamburgerComponent {

  @ViewChild('openButton') openButton: ElementRef<HTMLButtonElement>;

  focusOnOpenButtonSub = this.menuService
    .isOpen
    .pipe(filter(value => value === false))
    .subscribe(() => setTimeout(() => this.openButton.nativeElement.focus(), 100));

  constructor(private menuService: MenuService) {
  }


  @Output() clicked = new EventEmitter();

  onClick($event: MouseEvent) {
    $event.stopPropagation();
    this.clicked.emit();
  }

}
