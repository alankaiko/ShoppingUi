import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      title: 'Cart Item'
    }
  },
  {
    path: 'register',
    component: FormComponent,
    data: {
      title: 'Register Cart Item'
    }
  },
  {
    path: ':cod',
    component: FormComponent,
    data: {
      title: 'Edit Cart Item'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartItemRoutingModule {
}
