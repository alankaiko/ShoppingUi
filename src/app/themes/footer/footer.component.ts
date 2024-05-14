import {Component} from '@angular/core';
import {LayoutComponent} from "../layout/layout.component";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    constructor(public appMain: LayoutComponent) {
    }
}
