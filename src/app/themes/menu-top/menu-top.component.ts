import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutComponent} from "../layout/layout.component";

@Component({
    selector: 'app-topbar',
    templateUrl: './menu-top.component.html'
})
export class MenuTopComponent {

    items: MenuItem[];

    constructor(public appMain: LayoutComponent) {
    }
}
