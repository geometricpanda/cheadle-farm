import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  isOpen = new Subject<boolean>();

  closeMenu() {
    this.isOpen.next(false);
  }

  openMenu() {
    this.isOpen.next(true);
  }


}
