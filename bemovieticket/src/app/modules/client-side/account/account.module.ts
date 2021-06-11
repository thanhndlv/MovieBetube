import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account.component'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
  ]
})
export class AccountModule { }
