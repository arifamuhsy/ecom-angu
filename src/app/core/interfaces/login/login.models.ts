import {FormControl, Validators} from '@angular/forms';

export class Login {
    username = new FormControl(null, Validators.required);
    password = new FormControl(null, Validators.required);
}

export interface LoginBodyInterface {
    username: string;
    password: string;
}

export interface LoginResponseInterface {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
}
