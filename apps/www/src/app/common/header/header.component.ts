import { Component } from '@angular/core';
import { MenuService } from '@cheadle-farm/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private menuService: MenuService) {
  }

  open() {
    this.menuService.openMenu();
  }
  
}
