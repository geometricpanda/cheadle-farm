import { Component, Input } from '@angular/core';
import { DefinitionListSliceInterface } from '@cheadle-farm/prismic';

@Component({
  selector: 'app-cms-definition-list',
  templateUrl: './cms-definition-list.component.html',
  styleUrls: ['./cms-definition-list.component.css']
})
export class CmsDefinitionListComponent {
  @Input() slice: DefinitionListSliceInterface;
}
