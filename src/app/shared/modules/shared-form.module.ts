import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular-pro';

@NgModule({
    imports: [],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        FormModule
    ],
})
export class SharedFormModule {
}
