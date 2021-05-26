import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { HomeService } from './../../../../_core/service/home.service';
import { UserInfo, UserLogin } from './../../../../_core/model/model';
import { configs } from './../../../../_core/config';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  logo = "assets/home/images/logo.png";
  isEqual = true;
  userInfo = new UserInfo();
  userLogin = new UserLogin();
  error: string;
  signUpForm: any;
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      fullName: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      passwordConfirm: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^(09|03|08|07|05)[0-9]{8}")
        //Kiểm tra số điện thoại có phải là của Việt Nam
      ]),
    });
  }
  signUp() {
    this.userInfo.hoTen = this.signUpForm.get("fullName").value;
    this.userInfo.taiKhoan = this.signUpForm.get("userName").value;
    this.userInfo.matKhau = this.signUpForm.get("password").value;
    this.userInfo.email = this.signUpForm.get("email").value;
    this.userInfo.soDt = this.signUpForm.get("phoneNumber").value;
    this.userInfo.maLoaiNguoiDung = configs.userType.user;
    this.userInfo.maNhom = configs.groupID;

    this.homeService.postSignUp(this.userInfo).subscribe(
      res => {
        localStorage.setItem("user", JSON.stringify(res));
        this.router.navigate(["/"]);
      },
      error => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

  comparePassword(value: string, isPasswordField = "true") {
    if (isPasswordField == "true") {
      if (value == this.signUpForm.get("passwordConfirm").value) {
        this.isEqual = true;
      } else {
        this.isEqual = false;
      }
    } else {
      if (value == this.signUpForm.get("password").value) {
        this.isEqual = true;
      } else {
        this.isEqual = false;
      }
    }
  }

}
