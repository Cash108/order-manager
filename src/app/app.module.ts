import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
// import { LoginModule } from './components/login/login.module';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './components/login/register/register.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
    // LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
