import { Component, Input } from '@angular/core';
import { navItems } from './home/home-main/nav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'body',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'cv-v5';

  constructor(
    private router: Router,
) {}

  public navItems = navItems;
  @Input() sidebarId: string = "sidebar1";
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
    });
}
}
