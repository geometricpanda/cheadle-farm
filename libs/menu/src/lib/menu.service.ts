import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  isOpen = false;

  closeMenu() {
    this.isOpen = false;
  }

  openMenu() {
    this.isOpen = true;
  }


}
