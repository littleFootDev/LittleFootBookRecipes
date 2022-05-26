import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    public navbarCollapsed = true
    @Output() featureSelected = new EventEmitter<string>();
    public toggleNavbar(): void {
        this.navbarCollapsed = !this.navbarCollapsed
    }

    public onSelect(feature: string): void {
        this.featureSelected.emit(feature)
    }
}