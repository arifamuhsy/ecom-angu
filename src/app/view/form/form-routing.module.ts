import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMainComponent } from 'src/app/main/form/form-main/form-main.component';

const routes: Routes = [
  {
    path: '',
    component: FormMainComponent,
    data: {
      title: 'Form Menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
