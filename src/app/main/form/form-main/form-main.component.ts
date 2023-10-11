import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formGroup } from 'src/app/models/form.models';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent {

  form: FormGroup;
  hasil: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group(new formGroup())
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
