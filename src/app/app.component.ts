import { Component, Input } from '@angular/core';
import { navItems } from './shared/nav';
import { NavigationEnd, Router } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

@Component({
  selector: 'body',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'e-commerce';

  constructor(
    private router: Router,
    private iconSetService: IconSetService
) {
  iconSetService.icons = { ...iconSubset}
}

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
