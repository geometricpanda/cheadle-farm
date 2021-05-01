import { Component, Input } from '@angular/core';
import { AppLinksService } from '../../../app-links.service';

@Component({
  selector: 'app-header-links',
  templateUrl: './header-links.component.html',
  styleUrls: ['./header-links.component.css'],
})
export class HeaderLinksComponent {

  @Input() open = false;

  constructor(public appLinksService: AppLinksService) {
  }

}
