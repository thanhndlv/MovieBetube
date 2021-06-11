import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSideComponent } from './admin-side.component';
import { UserComponent } from './user/user.component';
import { FilmComponent } from './film/film.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowTimeComponent } from './show-time/show-time.component';

const adminRoutes: Routes = [
  {
    path: "admin-side",
    component: AdminSideComponent,
    children: [
      { path: "user", component: UserComponent },
      { path: "film", component: FilmComponent },
      { path: "film/show-time/:id", component: ShowTimeComponent},
      // { path: "", redirectTo: "/admin/film" },
    ]
  }
];

@NgModule({
  declarations: [
    AdminSideComponent,
    FilmComponent,
    UserComponent,
    ShowTimeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    NgbModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminSideModule { }
