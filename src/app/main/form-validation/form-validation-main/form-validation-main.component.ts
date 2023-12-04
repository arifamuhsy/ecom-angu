import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formValidationGroup } from 'src/app/models/form-validation.models';

@Component({
  selector: 'app-form-validation-main',
  templateUrl: './form-validation-main.component.html',
  styleUrls: ['./form-validation-main.component.scss']
})
export class FormValidationMainComponent {

  form: FormGroup;
  hasil: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group(new formValidationGroup())
  }

  submitForm(){
    this.hasil = true;
  }

  resetForm(){
    this.hasil = false;
    this.form.get('namaDepan')?.setValue('')
    this.form.get('namaBelakang')?.setValue('')
    this.form.get('email')?.setValue('')
    this.form.get('password')?.setValue('')
  }
}
