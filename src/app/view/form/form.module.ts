import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { FormModule } from 'src/app/main/form/form.module';


@NgModule({
  declarations: [],
  imports: [
    FormRoutingModule,
    FormModule
  ]
})
export class FormParentModule { }
