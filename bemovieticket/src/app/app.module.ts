import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from './_core/service/home.service';
import { AuthInterceptor } from './_core/interceptors/auth.interceptor';




@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SweetAlert2Module
  ],
  providers: [HomeService,[{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
