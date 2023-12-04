import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationMainComponent } from './form-validation-main/form-validation-main.component';
import { ButtonModule, CardModule, GridModule } from '@coreui/angular';
import { SharedBaseModule, SharedFormModule } from 'src/app/shared';



@NgModule({
  declarations: [
    FormValidationMainComponent
  ],
  imports: [
    SharedFormModule,
    CardModule,
    GridModule,
    SharedBaseModule,
    ButtonModule
  ]
})
export class FormValidationModule { }
