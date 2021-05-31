import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from "./modules/home/home/home.module";
import { AdminModule } from "./modules/admin/admin.module";
const routes: Routes = [
  { path: "", loadChildren: "./modules/home/home/home.module#HomeModule" },
  { path: "account", loadChildren: "./modules/home/account/account.module#AccountModule" },
  { path: "", loadChildren: "./modules/admin/admin.module#AdminModule" }
];

@NgModule({
  imports: [HomeModule, AdminModule, RouterModule.forRoot(routes), SweetAlert2Module.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
