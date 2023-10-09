import * as moment from 'moment';
import {AbstractControl} from '@angular/forms';

export function ValidateAge(date: AbstractControl): any {
    if (date.value) {
        // tslint:disable-next-line:no-shadowed-variable
        let normalDate;

        date.value instanceof Date ? normalDate = date.value : normalDate = new Date(date.value);

        const diff_ms = Date.now() - normalDate.getTime();
        const age_dt = new Date(diff_ms);
        const age = Math.abs(age_dt.getUTCFullYear() - 1970);

        if (age < 17) {
            return {ageRestriction: true};
        }
        return null;
    }
    return;
}

// fixed => used when there are only input date
export function stringDate(form: any) {
    const copiedFormValue = Object.assign({}, form.value);

    Object.keys(copiedFormValue).forEach(key => {
        const value = copiedFormValue[key];
        if (value instanceof Date) {
            copiedFormValue[key] = moment(value).format('YYYY-MM-DD');
        }
    });

    return copiedFormValue;
}

// fixed => used when there are input date and input period together
export function splitPeriodDate(form: any, startInput: string, endInput: string) {
    const copiedFormValue = Object.assign({}, form.value);
    const [start, end] = form.value[startInput];

    Object.keys(copiedFormValue).forEach((key: string) => {
        if (!(key === startInput && key === endInput)) {
            const value = copiedFormValue[key];

            if (value instanceof Date) {
                copiedFormValue[key] = moment(value).format('YYYY-MM-DD');
            }
        }
    });

    copiedFormValue[startInput] = moment(start).format('YYYY-MM-DD');
    copiedFormValue[endInput] = moment(end).format('YYYY-MM-DD');

    return copiedFormValue;
}

export function calculateDate(date: any) {
    const today = moment();
    const past = moment(date);

    const duration = moment.duration(today.diff(past));

    let message = '';
    message += duration.years() + ' Tahun ';
    message += duration.months() + ' Bulan ';
    message += duration.days() + ' Hari ';

    return message;
}

export function getMonth(month: number) {
    switch (month) {
        case 1:
            return 'Januari';
        case 2:
            return 'Februari';
        case 3:
            return 'Maret';
        case 4:
            return 'April';
        case 5:
            return 'Mei';
        case 6:
            return 'Juni';
        case 7:
            return 'Juli';
        case 8:
            return 'Agustus';
        case 9:
            return 'September';
        case 10:
            return 'Oktober';
        case 11:
            return 'November';
        case 12:
            return 'Desember';
    }
}

export function signatureDate() {
    const todayDate = new Date();
    return todayDate.getDate() + ' ' + getMonth(todayDate.getMonth()) + ' ' + todayDate.getFullYear();
}

export function timeStamp() {
    // tslint:disable-next-line:no-shadowed-variable
    const timeStamp = new Date();
    // tslint:disable-next-line:max-line-length
    return timeStamp.getDate() + ' ' + getMonth(timeStamp.getMonth()) + ' ' + timeStamp.getFullYear() + ' ' + timeStamp.getHours() + ':' + timeStamp.getMinutes();
}

export function convertDate(date: any) {
    const convertedDate = moment(date);
    return convertedDate.date() + ' ' + getMonth(convertedDate.month() + 1) + ' ' + convertedDate.year();
}

export function convertDateWithTime(date: any) {
    const convertedDate = moment(date);
    // tslint:disable-next-line:max-line-length
    return convertedDate.date() + ' ' + getMonth(convertedDate.month() + 1) + ' ' + convertedDate.year() + ' ' + convertedDate.hours() + ':' + convertedDate.minutes();
}
