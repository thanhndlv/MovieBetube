import { TicketComponent } from './../ticket/ticket.component';
import { HomeService } from './../../../_core/service/home.service';
import { AuthInterceptor } from './../../../_core/interceptors/auth.interceptor';
import { PipeModule } from './../../../_core/pipe/pipe.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
const homeRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "", component: IndexComponent },
            { path: "user-detail/:userName", component: UserDetailComponent },
            { path: "ticket/:showTimeID", component: TicketComponent },
        ]


    }

];

@NgModule({
    // declarations: [HomeComponent, IndexComponent, AboutUsComponent, ContactComponent, UtilityComponent, DetailComponent, UserDetailComponent, TicketComponent],
    // imports: [SweetAlert2Module, CommonModule, PipeModule, NgbModule, SlickCarouselModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
    // providers: []
    declarations: [HomeComponent, IndexComponent, TicketComponent],
    imports: [CommonModule, NgbModule, SlickCarouselModule, PipeModule, FormsModule, SweetAlert2Module, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
    providers: [HomeService, [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]]
})
export class HomeModule { }
