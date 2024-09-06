import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListComponent } from './SupplierManagementUI/supplier-list/supplier-list.component';
import { SupplierDetailComponent } from './SupplierManagementUI/supplier-list/supplier-detail/supplier-detail.component';

const routes: Routes = [


  {
    path: 'supplier-list', component: SupplierListComponent
  },
  {
    path: 'supplier-detail/:id', component: SupplierDetailComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
