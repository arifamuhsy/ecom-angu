import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl: 'page403.component.html',
    styleUrls: ['page403.component.scss']
})
export class Page403Component {

    constructor(private location: Location) {

    }
  
    onGoBack() {
        this.location.back();
    }

}
