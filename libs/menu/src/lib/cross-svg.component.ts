import { Component } from '@angular/core';

@Component({
  selector: 'cheadle-farm-cross',
  styles: [`
    .svg-cross {
      width: 15px;
      height: 15px;
    }
    .svg-cross path {
      fill: currentColor;
    }
  `],
  template: `
    <svg class="svg-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <path d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"></path>
    </svg>
  `
})
export class CrossSvgComponent {

}
