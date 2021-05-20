import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './modules/admin/admin.component';



@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
