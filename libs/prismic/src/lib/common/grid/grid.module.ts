import { NgModule } from '@angular/core';
import { ColComponent } from './col/col.component';
import { RowComponent } from './row/row.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    ColComponent,
    RowComponent,
    ContainerComponent,
  ],
  exports: [
    ColComponent,
    RowComponent,
    ContainerComponent,
  ]
})
export class GridModule {
}
