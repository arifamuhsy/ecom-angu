import { INavData } from '@coreui/angular-pro';

export interface ProfileInterface {
    userId?: number | null
    username?: string | null;
    selectedPak?: string | null;
    organization?: SelectableOrganizationListInterface[] | null;
    selectedOrganization?: SelectableOrganizationListInterface | null;
    selectedRole?: SelectableRoleListInterface | null;
    selectedModule?: SelectableModuleListInterface | null;
    menu?: INavData[] | null;
    trackList?: any;
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
