import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from "./modules/home/home/home.module";


const routes: Routes = [
  { path: "", loadChildren: "./modules/home/home/home.module#HomeModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
