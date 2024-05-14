import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {BillingAddressRoutingModule} from "./billing-address-routing.module";

@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    BillingAddressRoutingModule
  ]
})
export class BillingAddressModule {
}
