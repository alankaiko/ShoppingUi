import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      title: 'Customer Ordem'
    }
  },
  {
    path: 'register',
    component: FormComponent,
    data: {
      title: 'Register Customer Ordem'
    }
  },
  {
    path: ':cod',
    component: FormComponent,
    data: {
      title: 'Edit Customer Ordem'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOrdemRoutingModule {
}
