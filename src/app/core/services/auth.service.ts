import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {constant} from '../../../environments/constant';
import {environment} from '../../../environments/environment';
import {UiProfileService} from './profile-service';
import {LoginBodyInterface, LoginResponseInterface} from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    static readonly loginUrl = `${constant.oauthUrl}/token`;
    static readonly logoutUrl = `${constant.oauthUrl}/token/logout`;

    constructor(
        private http: HttpClient,
        private uiProfileService: UiProfileService,
    ) {
    }

    // get access token
    public get accessToken(): string {
        return localStorage.getItem('accessToken');
    }

    // set access token
    public set accessToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
    }

    // get refresh token
    public get refreshToken(): string {
        return localStorage.getItem('refreshToken');
    }

    // set refresh token
    public set refreshToken(refreshToken: string) {
        localStorage.setItem('refreshToken', refreshToken);
    }

    // noinspection JSMethodCanBeStatic
    private get basicHeader(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': 'Basic ' + btoa(`${environment.basicUsername}:${environment.basicPassword}`),
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    }

    // check token
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('accessToken');
        return Boolean(token);
    }

    // clear local storage
    public clearCredentials() {
        localStorage.clear();
    }

    // process check refresh token
    public doRefreshToken(): Observable<any> {
        const body = `grant_type=refresh_token&refresh_token=${this.refreshToken}`;

        return this.http.post(AuthService.loginUrl, body, {headers: this.basicHeader})
            .pipe(
                tap(response => this.accessToken = response.access_token)
            );
    }

    // login
    login(body: LoginBodyInterface): Observable<LoginResponseInterface> {
        const reqBody = `grant_type=password&username=${body.username}&password=${body.password}`;

        return this.http.post<LoginResponseInterface>(AuthService.loginUrl, reqBody, {headers: this.basicHeader})
            .pipe(
                switchMap((response: LoginResponseInterface) => {
                    this.accessToken = response.access_token;
                    this.refreshToken = response.refresh_token;

                    return this.uiProfileService.getProfile();
                }),
            );
    }

    // logout
    public logout(): Observable<any> {
        return this.http.post(AuthService.logoutUrl, null);
    }
}
