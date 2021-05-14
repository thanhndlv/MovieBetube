import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

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
    declarations: [HomeComponent, IndexComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
    providers: []
})
export class HomeModule { }
