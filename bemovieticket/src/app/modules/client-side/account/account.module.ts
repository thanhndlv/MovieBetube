import { AuthInterceptor } from './../../../_core/interceptors/auth.interceptor';
import { AdminService } from './../../../_core/service/admin.service';
import { ClientService } from './../../../_core/service/client.service';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account.component'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
const accountRoutes: Routes = [
  {
    path: "account",
    component: AccountComponent,
    children: [
      {
        path: "sign-up",
        component: SignUpComponent
      },
      {
        path: "sign-in",
        component: SignInComponent
      }
    ],
  }
];
@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    AccountComponent
  ],
  imports: [
    [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(accountRoutes)]
  ],
  providers: [ClientService, AdminService, [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]],

})
export class AccountModule { }
