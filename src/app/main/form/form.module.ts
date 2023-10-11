import { NgModule } from '@angular/core';
import { FormMainComponent } from './form-main/form-main.component';
import { SharedBaseModule, SharedFormModule } from 'src/app/shared';
import { ButtonModule, CardModule, GridModule } from '@coreui/angular';



@NgModule({
  declarations: [
    FormMainComponent
  ],
  imports: [
    SharedFormModule,
    CardModule,
    GridModule,
    SharedBaseModule,
    ButtonModule
  ]
})
export class FormModule { }
