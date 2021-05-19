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
import { AccountComponent } from '../account/account.component';

const homeRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [{ path: "", component: IndexComponent },
        ]
    }
];

@NgModule({
    // declarations: [HomeComponent, IndexComponent, AboutUsComponent, ContactComponent, UtilityComponent, DetailComponent, UserDetailComponent, TicketComponent],
    // imports: [SweetAlert2Module, CommonModule, PipeModule, NgbModule, SlickCarouselModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
    // providers: []
    declarations: [HomeComponent, IndexComponent, AccountComponent],
    imports: [CommonModule,NgbModule,SlickCarouselModule, PipeModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
    providers: []
})
export class HomeModule { }
