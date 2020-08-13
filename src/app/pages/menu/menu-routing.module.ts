import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'payment',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'payment',
        loadChildren: () => import('../payment/payment.module').then( m => m.PaymentPageModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('../employees/employees.module').then( m => m.EmployeesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
