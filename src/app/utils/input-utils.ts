// fixed => used for system admin
export function normalizeFlag(form: any) {
    const copiedFormValue = Object.assign({}, form.value);

    Object.keys(copiedFormValue).forEach((key: string) => {
        const value = copiedFormValue[key];

        if (typeof value === 'boolean') {
            copiedFormValue[key] = value ? 'Y' : 'N';
        }
    });

    return copiedFormValue;
}

// fixed convert booleanInString to boolean
export function convertBooleanInStringToBoolean(value: any) {
    const valuePatch = Object.assign({}, value);

    Object.keys(valuePatch).forEach(key => {
        if (valuePatch[key] === 'true') {
            valuePatch[key] = true;
        } else if (valuePatch[key] === 'false') {
            valuePatch[key] = false;
        }
    });

    return valuePatch;
}

// fixed with multiple boolean checkbox convert to binary in string
export function convertMultipleBooleanToBinaryInString(formValue: any) {
    const copiedFormValue = Object.assign({}, formValue);

    Object.keys(copiedFormValue).forEach(key => {
        const value = copiedFormValue[key];

        if (typeof value === 'boolean') {
            copiedFormValue[key] = value ? '1' : '0';
        }

    });

    return copiedFormValue;
}

// fixed with boolean checkbox convert to binary in string
export function convertBooleanToBinaryInString(formValue: any, binaryFields: any[]) {
    const copiedFormValue = Object.assign({}, formValue);

    Object.keys(copiedFormValue).forEach(key => {
        const isBinary: boolean = binaryFields.includes(key);
        const value = copiedFormValue[key];

        if (isBinary) {
            if (typeof value === 'boolean') {
                copiedFormValue[key] = value ? '1' : '0';
            }
        }
    });

    return copiedFormValue;
}

// ------------------------------------------------------

// fixed with input textNumber convert to string => round to 2 decimal
export function convertTextNumberToString(formValue: any, fields: any[]) {
    const copiedFormValue = Object.assign({}, formValue);

    Object.keys(copiedFormValue).forEach(key => {
        const isTextNumber: boolean = fields.includes(key);
        const value = copiedFormValue[key];

        if (isTextNumber) {
            if (value && typeof value === 'number') {
                copiedFormValue[key] = (value).toString().replace('.', ',');
            } else {
                copiedFormValue[key] = '0';
            }
        }
    });

    return copiedFormValue;
}

// fixed with input textNumber convert to number
export function convertTextNumberToNumber(formValue: any, fields: any[]) {
    const copiedFormValue = Object.assign({}, formValue);

    Object.keys(copiedFormValue).forEach(key => {
        const isTextNumber: boolean = fields.includes(key);
        const value = copiedFormValue[key];

        if (isTextNumber) {
            if (value && typeof value === 'string') {
                const valueFormat = value.replace('.', '').replace(',', '.');
                copiedFormValue[key] = +valueFormat;
            } else {
                copiedFormValue[key] = +value;
            }
        }
    });

    return copiedFormValue;
}

// ------------------------------------------------------


// fixed with input % in number convert to string  => round to 2 decimal
export function convertPercentToString(formValue: any, percentFields: any[]) {
    const copiedFormValue = Object.assign({}, formValue);

    Object.keys(copiedFormValue).forEach(key => {
        const isPercent: boolean = percentFields.includes(key);
        const value = copiedFormValue[key];

        if (isPercent && value && typeof value === 'number') {
            copiedFormValue[key] = (value).toString().replace('.', ',');
        }
    });

    return copiedFormValue;
}

// fixed with input % in string convert to number
export function convertPercentToNumber(formValue: any, percentFields: any[]) {
    const copiedFormValue = Object.assign({}, formValue);

    Object.keys(copiedFormValue).forEach(key => {
        const isPercent: boolean = percentFields.includes(key);
        const value = copiedFormValue[key];

        if (isPercent && value && typeof value === 'string') {
            const newValue = value.replace(' %', '').replace(',', '.');
            copiedFormValue[key] = +newValue;
        }
    });

    return copiedFormValue;
}
