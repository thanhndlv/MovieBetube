import { PipeModule } from './../../_core/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSideComponent } from './client-side.component';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const clientRoutes: Routes = [
  {
    path: "",
    component: ClientSideComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "user-detail/:userName", component: UserDetailComponent },
      { path: "ticket/:showTimeID", component: TicketComponent },
      { path: "detail/:filmID", component: DetailComponent },
    ]
  }
];

@NgModule({
  declarations: [ClientSideComponent, HomeComponent, DetailComponent, UserDetailComponent, TicketComponent, HomeComponent],
  imports: [SweetAlert2Module, CommonModule, PipeModule, NgbModule, SlickCarouselModule, FormsModule,
    ReactiveFormsModule, RouterModule.forChild(clientRoutes)],
  providers: []
})
export class ClientSideModule { }
