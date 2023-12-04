import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationMainComponent } from 'src/app/main/form-validation/form-validation-main/form-validation-main.component';

const routes: Routes = [
  {
    path: '',
    component: FormValidationMainComponent,
    data: {
      title: 'Form Validation'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
