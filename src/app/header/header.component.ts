import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    public navbarCollapsed = true

    public toggleNavbar(): void {
        this.navbarCollapsed = !this.navbarCollapsed
    }
}