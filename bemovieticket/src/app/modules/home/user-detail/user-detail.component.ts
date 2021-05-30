import { Component, OnInit } from '@angular/core';
import { HomeService } from "./../../../_core/service/home.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UserInfo, UserLogin } from "../../../_core/model/model";
import { first } from "rxjs/operators";
import * as $ from "jquery";
import { configs } from "../../../_core/config";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm: any;
  userName: string;
  userInfo: UserInfo = new UserInfo();
  user: any;
  listSeat: any;
  token = JSON.parse(localStorage.getItem("user"));
  bookingHistory: any;
  isLoading = true;
  constructor(
    private _homeService: HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params.userName;
    this.token = this.token.accessToken;
    this.getUserInfo();
  }
  getUserInfo() {
    this._homeService.putChangeInfoUser(this.userName, this.token).subscribe(
      res => {
        this.user = res;
        this.bookingHistory = this.user.thongTinDatVe;
        this.bookingHistory = this.bookingHistory.slice(
          this.bookingHistory.length - 3,
          this.bookingHistory.length
        );
        this.userForm = new FormGroup({
          fullName: new FormControl(this.user.hoTen,[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32)
          ]),
          userName: new FormControl(this.user.taiKhoan,[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32)
          ]),
          phoneNumber: new FormControl(this.user.soDienThoai,[
            Validators.required,
            Validators.pattern("^(09|03|08|07|05)[0-9]{8}")
          ]),
          password: new FormControl(this.user.matKhau,[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32)
          ]),
          email: new FormControl(this.user.email,[
            Validators.required,
            Validators.email
          ])
        });
        this.isLoading = false;
      },
      
    );

  }

}
