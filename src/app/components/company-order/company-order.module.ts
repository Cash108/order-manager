import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {PrimengModule} from '../../module/primeng.module';
import {DataStatisticsComponent} from './data-statistics/data-statistics.component';
import {CompanyOrderComponent} from './company-order.component';
import { MerchantComponent } from './merchant/merchant.component';

const routes: Routes = [
  {path: '', component: CompanyOrderComponent,
   children: [
       {path: '',  redirectTo: 'data', pathMatch: 'full'},
       {path: 'merchant', component: MerchantComponent},
       {path: 'data', component: DataStatisticsComponent}
    ]}
];


@NgModule({
  declarations: [
    DataStatisticsComponent,
    CompanyOrderComponent,
    MerchantComponent
  ],
  imports: [
    PrimengModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyOrderModule {
}
