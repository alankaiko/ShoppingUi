import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      title: 'Billing Address'
    }
  },
  {
    path: 'register',
    component: FormComponent,
    data: {
      title: 'Register Billing Address'
    }
  },
  {
    path: ':cod',
    component: FormComponent,
    data: {
      title: 'Edit Billing Address'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingAddressRoutingModule {
}
