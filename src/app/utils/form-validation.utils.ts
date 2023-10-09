import { FormGroup, AbstractControl } from "@angular/forms";

export const isFieldInvalid = (form: FormGroup, field: string | Array<string>): boolean => {
    const fieldControl = form.get(field);
    return fieldControl!.invalid && (fieldControl!.dirty || fieldControl!.touched);
}

export function isFieldRequired(form: FormGroup, field: string, required: boolean) {
    const fieldControl: AbstractControl = this.form.get(field);

    if (required) {
        !fieldControl.value
            ? fieldControl.setErrors({required: true})
            : fieldControl.setErrors(null);
    } else {
        fieldControl.setErrors(null);
    }

    return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
}

export function keyPressPattern(event: KeyboardEvent, pattern: RegExp) {
    const inputChar = event.key;

    if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
    }
}

export function ValidateMobile(mobile: AbstractControl): any {
    if (mobile.value) {
        const split = mobile.value.split('');

        if (split[0] !== '0') {
            return {mobileFormat: true};
        } else if (split[1] !== '8') {
            return {mobileFormat: true};
        }

        return null;
    }
    return;
}

export function ValidateEmail(email: AbstractControl): any {
    if (email.value) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegex.test(email.value)) {
            return {emailFormat: true};
        }

        return null;
    }

    return;
}

export function ValidateTime(time: AbstractControl): any {
    if (time.value) {
        let timeSplit = time.value.split('');

        if (timeSplit[0] === '2' && Number(timeSplit[1]) > 4) {
            return {timeFormat: true};
        }

        return null;
    }

    return;
}
