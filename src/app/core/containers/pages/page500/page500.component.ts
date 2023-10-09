import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page500',
  templateUrl: './page500.component.html',
  styleUrls: ['./page500.component.scss']
})
export class Page500Component {

  constructor(private location: Location) {

  }

  onGoBack() {
      this.location.back();
  }

}
