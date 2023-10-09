import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, forkJoin} from 'rxjs';
import {tap} from 'rxjs/operators';
import {constant} from '../../../../environments/constant';
import {TrackListInterface} from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class UiProfileService {
    static readonly profileUrl = `${constant.oauthUrl}/profile/me`;

    // encrypt save to local storage
    static dataProfile = {
        userId: null,
        username: null,
        selectedPak: null,
        organization: null,
        selectedOrganization: null,
        selectedRole: null,
        selectedModule: null,
        menu: null,
        trackList: null
    };

    constructor(
        private http: HttpClient,
    ) {
    }

    // set ui token
    public set uiToken(data: any) {
        localStorage.setItem('uiToken', btoa(JSON.stringify(data)));
    }

    // get ui token
    public get uiToken() {
        return JSON.parse(atob(localStorage.getItem('uiToken')));
    }

    // get user profile
    getProfile(): Observable<any> {
        return this.http.get(UiProfileService.profileUrl)
            .pipe(
                tap((profile: any) => {
                    const principal = profile.principal;

                    UiProfileService.dataProfile.userId = principal.userId;
                    UiProfileService.dataProfile.username = principal.username;

                    this.uiToken = UiProfileService.dataProfile;
                })
            );
    }

    // get user organizations
    getOrganizations(): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/organization`);
    }

    // get user roles
    getRoles(id: number): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/role/${id}`);
    }

    // get user module
    getModules(id: number): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/module/cora/${id}`);
    }

    getAdministrationModule(id: number): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/module/admin/${id}`);
    }

    // get home menu
    getHomeMenu(): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/menu/home`);
    }

    // get user menu
    getInitialModuleData(ModuleId: number, RoleId: number): Observable<any> {
        const trackList = this.http.get<TrackListInterface[]>(`${constant.appUrl}/reference/track-list/${ModuleId}/${RoleId}`);
        const menu = this.http.get<any>(`${constant.appUrl}/menu/tree/${ModuleId}/${RoleId}`);

        return forkJoin([trackList, menu]);
    }

    getAdministratorMenu(ModuleId: number, RoleId: number): Observable<any> {
        return this.http.get<any>(`${constant.appUrl}/menu/tree/${ModuleId}/${RoleId}`);
    }
}

