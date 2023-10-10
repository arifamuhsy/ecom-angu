import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormModule } from 'src/app/main/form/form.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormModule
  ]
})
export class FormParentModule { }
