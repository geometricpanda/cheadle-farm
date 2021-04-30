import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  isOpen = new BehaviorSubject<boolean>(false);

  closeMenu() {
    this.isOpen.next(false);
  }

  openMenu() {
    this.isOpen.next(true);
  }


}
