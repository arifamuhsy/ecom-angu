import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Main',
    },
    children: [
      {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
      },
      {
        path: 'intro',
        loadChildren: () => import('./intro/intro.module').then((mod) => mod.IntroModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
