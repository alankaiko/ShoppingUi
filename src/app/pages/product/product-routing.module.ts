import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      title: 'Products'
    }
  },
  {
    path: 'register',
    component: FormComponent,
    data: {
      title: 'Register Product'
    }
  },
  {
    path: ':cod',
    component: FormComponent,
    data: {
      title: 'Edit Product'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
