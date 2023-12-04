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
        path: 'menu1',
        loadChildren: () => import('./menu1/menu1.module').then((mod) => mod.Menu1ParentModule)
      },
      {
        path: 'menu2',
        loadChildren: () => import('./menu2/menu2.module').then((mod) => mod.Menu2ParentModule)
      },
      {
        path: 'menu3',
        loadChildren: () => import('./menu3/menu3.module').then((mod) => mod.Menu3ParentModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.module').then((mod) => mod.FormParentModule)
      },
      {
        path: 'form-validation',
        loadChildren: () => import('./form-validation/form-validation.module').then((mod) => mod.FormValidationParentModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
