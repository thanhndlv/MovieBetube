import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.scss']
})
export class AdminSideComponent implements OnInit {
  logo = "assets/home/images/Logo.png";
  isMobile = false;

  constructor(public router: Router) {}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("userAdmin"));
    if (!user) {
      this.router.navigate(["/account/login"]);
    }
    let width = window.innerWidth;
    if (width < 576) {
      this.isMobile = true;
    }
    $("body").css("background-color", "white");
  }

  signOutAdmin() {
    localStorage.removeItem("userAdmin");
    this.router.navigate["/admin-side/user"];
  }
}

