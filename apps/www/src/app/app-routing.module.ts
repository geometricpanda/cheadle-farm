import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/cms/cms.module').then(mod => mod.CmsModule)
};

const cms: Route = {
  path: ':uid',
  loadChildren: () => import('./pages/cms/cms.module').then(mod => mod.CmsModule)
};

const routes: Route[] = [
  home,
  cms,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
