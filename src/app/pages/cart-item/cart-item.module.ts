import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {CartItemRoutingModule} from "./cart-item-routing.module";

@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CartItemRoutingModule
  ]
})
export class CartItemModule {
}
