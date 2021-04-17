import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/cms/cms.module').then(mod => mod.CmsModule)
};

const levelZero: Route = {
  path: ':uid',
  loadChildren: () => import('./pages/cms/cms.module').then(mod => mod.CmsModule)
};

const levelOne: Route = {
  path: ':unused/:uid',
  loadChildren: () => import('./pages/cms/cms.module').then(mod => mod.CmsModule)
};

const routes: Route[] = [
  home,
  levelZero,
  levelOne,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
