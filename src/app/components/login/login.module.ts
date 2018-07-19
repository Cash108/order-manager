import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {ProtocolComponent} from './protocol/protocol.component';
import {RegisterComponent} from './register/register.component';
import {PrimengModule} from '../../module/primeng.module';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'protocol', component: ProtocolComponent}
];


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProtocolComponent
  ],
  imports: [
    PrimengModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginModule {
}
