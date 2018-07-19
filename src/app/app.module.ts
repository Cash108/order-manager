import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {DataStatisticsComponent} from './components/company-order/data-statistics/data-statistics.component';
import { CompanyOrderComponent } from './components/company-order/company-order.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: '../app/components/login/login.module#LoginModule'},
  {path: 'company-order', loadChildren: '../app/components/company-order/company-order.module#CompanyOrderModule'}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
    // RouterModule.forRoot(
    //   appRoutes,
    //
    //   // { enableTracing: true } // <-- debugging purposes only
    // )
    // LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
