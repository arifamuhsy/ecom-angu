import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormValidationModule } from 'src/app/main/form-validation/form-validation.module';


@NgModule({
  declarations: [],
  imports: [
    FormValidationRoutingModule,
    FormValidationModule
  ]
})
export class FormValidationParentModule { }
