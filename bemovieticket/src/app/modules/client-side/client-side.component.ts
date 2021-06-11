import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.component.html',
  styleUrls: ['./client-side.component.scss']
})
export class ClientSideComponent implements OnInit {

  user: any;
  logo = "assets/home/images/Logo.png";

  constructor() { }
  ngOnInit() {
    $("body").css({ "background-color": "#e9ebee" });
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user)
  }


  logOut() {
    localStorage.removeItem('user');
    this.user = null;
  }

}

