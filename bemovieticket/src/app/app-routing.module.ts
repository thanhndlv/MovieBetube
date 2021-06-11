import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientSideModule } from './modules/client-side/client-side.module';
import { AccountModule } from './modules/client-side/account/account.module';
import { AdminSideModule } from './modules/admin-side/admin-side.module';
const routes: Routes = [
  { path: "", loadChildren: "./modules/client-side/client-side.module#ClientSideModule" },
  { path: "", loadChildren: "./modules/client-side/account/account.module#AccountModule" },
  { path: "", loadChildren: "./modules/admin-side/admin-side.module#AdminSideModule" }
];

@NgModule({
  imports: [ClientSideModule, AdminSideModule, AccountModule, RouterModule.forRoot(routes), SweetAlert2Module.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
