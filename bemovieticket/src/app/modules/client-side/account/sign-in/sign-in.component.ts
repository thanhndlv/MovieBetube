import { ClientService } from './../../../../_core/service/client.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from './../../../../_core/model/model';
import { Router } from '@angular/router';
import  { FormControl, FormGroup, Validators } from '@angular/forms';
import {configs} from "./../../../../_core/config";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  user = new Account();
  logo = "assets/home/images/Logo.png";
  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ])
    });
  }

  async signIn() {
    this.user.taiKhoan = this.loginForm.value.userName;
    this.user.matKhau = this.loginForm.value.password;
    const res = await this.clientService.postSignIn(this.user.taiKhoan, this.user.matKhau)
    if (res.maLoaiNguoiDung == configs.userType.user) {
      localStorage.setItem("user", JSON.stringify(res));
      localStorage.setItem("token", res.accessToken);
      console.log("abc", JSON.stringify(res));
      this.router.navigate(["/"]);
    } else {
      localStorage.setItem("userAdmin", JSON.stringify(res));
      localStorage.setItem("token", res.accessToken);
      this.router.navigate(["/admin-side/film"]);
    }
  }
  // signIn() {
  //   this.user.taiKhoan = this.loginForm.get("userName").value;
  //   this.user.matKhau = this.loginForm.get("password").value;
  //   this.clientService.postSignIn(this.user).subscribe(
  //     res => {
  //       if (res.maLoaiNguoiDung == configs.userType.user) {
  //         localStorage.setItem("user", JSON.stringify(res));
  //         this.router.navigate(["/"]);
  //       } else {
  //         localStorage.setItem("userAdmin", JSON.stringify(res));
  //         this.router.navigate(["/admin/film"]);
  //       }
  //     },
  //     error => {
  //       this.error = error.error;
  //       console.log(error);
  //     }
  //   );
  // }
}