import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MenuService } from '@cheadle-farm/menu';
import { filter, skip } from 'rxjs/operators';

@Component({
  selector: 'app-header-hamburger',
  templateUrl: './header-hamburger.component.html',
  styleUrls: ['./header-hamburger.component.css'],
})
export class HeaderHamburgerComponent {

  @ViewChild('openButton') openButton: ElementRef<HTMLButtonElement>;

  focusOnOpenButtonSub = this.menuService
    .isOpen
    .pipe(skip(1))
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
