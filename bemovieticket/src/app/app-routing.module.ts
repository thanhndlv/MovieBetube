import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from "./modules/home/home/home.module";
import { AdminModule } from "./modules/admin/admin.module";
import { AccountModule } from "./modules/home/account/account.module"
const routes: Routes = [
  { path: "", loadChildren: "./modules/home/home/home.module#HomeModule" },
  { path: "account", loadChildren: "./modules/home/account/account.module.ts#AccountModule" },
  { path: "admin", loadChildren: "./modules/admin/admin.module.ts#AdminModule" }
];

@NgModule({
  imports: [HomeModule, AdminModule, AccountModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
