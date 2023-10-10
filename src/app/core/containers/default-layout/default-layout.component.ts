import { Component, Input, ViewChild } from '@angular/core';
// import {AppLoadingComponent} from '../../../components/loading';
import { navItems } from '../../../shared/nav';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
    public navItems = navItems;
    // @ViewChild('loading', {static: false}) loading: AppLoadingComponent;
    @Input() sidebarId: string = "sidebar1";

    // menu$: Observable<INavData[]>;

    // public perfectScrollbarConfig = {
    //     suppressScrollX: true,
    // };

    constructor(
    ) {}

    ngOnInit() {

    }
}
