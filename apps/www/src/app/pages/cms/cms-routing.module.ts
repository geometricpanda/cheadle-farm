import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CmsComponent } from './cms.component';
import { CmsCanActivate } from './cms-can-activate.service';

const allRoutes: Route = {
  path: '',
  canActivate: [CmsCanActivate],
  component: CmsComponent
};

const routes: Route[] = [
  allRoutes
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CmsRoutingModule {
}
