import { Component } from '@angular/core';
import { AppLinksService } from '../../app-links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public appLinksService: AppLinksService) { }
}
