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
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
const homeRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [{ path: "", component: IndexComponent },
        { path: "user-detail/:userName", component: UserDetailComponent }
        ]
        

    }
    
];

@NgModule({
    // declarations: [HomeComponent, IndexComponent, AboutUsComponent, ContactComponent, UtilityComponent, DetailComponent, UserDetailComponent, TicketComponent],
    // imports: [SweetAlert2Module, CommonModule, PipeModule, NgbModule, SlickCarouselModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
    // providers: []
    declarations: [HomeComponent, IndexComponent, UserDetailComponent],
    imports: [SweetAlert2Module, CommonModule, NgbModule, SlickCarouselModule, PipeModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
    providers: []
})
export class HomeModule { }
