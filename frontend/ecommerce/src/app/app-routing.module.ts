import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './common/product';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path: "products", component: ProductListComponent },
  {path: "category", component: ProductListComponent },
  {path: "category/:id", component: ProductListComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  {path: 'cart-details', component:ProductDetailsComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }