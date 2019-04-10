import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        loadChildren: './category/category.module#AppCategoryModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#AppProductModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#AppCustomerModule'
      },
      {
        path: 'address',
        loadChildren: './address/address.module#AppAddressModule'
      },
      {
        path: 'wish-list',
        loadChildren: './wish-list/wish-list.module#AppWishListModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppEntityModule {}
