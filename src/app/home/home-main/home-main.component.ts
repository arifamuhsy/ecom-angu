import { Component } from '@angular/core';
import { navItems } from './nav';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent {
  public navItems = navItems;
}
