import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './core/containers';
import { Page403Component } from './core/containers/pages/page403/page403.component';
import { Page404Component } from './core/containers/pages/page404/page404.component';
import { Page500Component } from './core/containers/pages/page500/page500.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    // path: '',
    // loadChildren:async () => {
    //   const m = await import('./home/home.module');
    //   return m.HomeModule;
    // }
    path: '',
    component: DefaultLayoutComponent,
    children: [
       {
         path: '',
         loadChildren: () => import('./view/view.module').then((mod) => mod.ViewModule)
       }
     ],
  },
  {
      path: '403',
      component: Page403Component,
      data: {
          title: 'Page 403'
      }
  },
  {
      path: '404',
      component: Page404Component,
      data: {
          title: 'Page 404'
      }
  },
  {
      path: '500',
      component: Page500Component,
      data: {
          title: 'Page 500'
      }
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
