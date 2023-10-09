import {INavData} from '@coreui/angular-pro';

export interface ProfileInterface {
    userId: number;
    username: string;
    selectedPak: string;
    organization: SelectableOrganizationListInterface[];
    selectedOrganization: SelectableOrganizationListInterface;
    selectedRole: SelectableRoleListInterface;
    selectedModule: SelectableModuleListInterface;
    menu: INavData[];
    trackList: any;
}

export interface SelectableOrganizationListInterface {
    id: number;
    organization: string;
    code: string;
}

export interface ResponseSelectableOrganizationListInterface {
    content: SelectableOrganizationListInterface[];
}

export interface SelectableRoleListInterface {
    id: number;
    role: string;
}

export interface ResponseSelectableRoleListInterface {
    content: SelectableRoleListInterface[];
}

export interface SelectableModuleListInterface {
    id: number;
    name: string;
}

export interface ResponseSelectableModuleListInterface {
    content: SelectableModuleListInterface[];
}

export interface TrackListInterface {
    trackCode: string;
    trackName: string;
    menuCode: string;
}
