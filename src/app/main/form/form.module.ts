import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMainComponent } from './form-main/form-main.component';
import { SharedFormModule } from 'src/app/shared';
import { CardModule } from '@coreui/angular';



@NgModule({
  declarations: [
    FormMainComponent
  ],
  imports: [
    CommonModule,
    SharedFormModule,
    CardModule
  ]
})
export class FormModule { }
