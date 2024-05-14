import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'billing-address',
    loadChildren: () => import('./billing-address/billing-address.module').then(m => m.BillingAddressModule)
  },
  {
    path: 'carts',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'cart-itens',
    loadChildren: () => import('./cart-item/cart-item.module').then(m => m.CartItemModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'customer-ordens',
    loadChildren: () => import('./customer-ordem/customer-ordem.module').then(m => m.CustomerOrdemModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
