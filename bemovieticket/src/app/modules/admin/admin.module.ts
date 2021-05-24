import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const adminRoutes: Routes = [
  {
    path: "admin",  
    component: AdminComponent,
    children: [{ path: "user", component: UserComponent }],
  }
];

@NgModule({
  declarations: [AdminComponent, UserComponent],
  imports: [
    NgbModule, ReactiveFormsModule, CommonModule, RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
