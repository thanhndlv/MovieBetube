import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "./../../../_core/service/admin.service";
import { Film, FilmSchedule } from "../../../_core/model/model";
import { configs } from "../../../_core/config";
import * as $ from "jquery";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.scss"]
})
export class FilmComponent implements OnInit {
  date1 = new Date();
  date2: any
  listFilm: any;
  film = new Film();
  addFilmForm: any;
  addShowTimeForm: any;
  formTitle: string;
  isEdit = false;
  error: string;
  isError = false;
  filmIdDelete: string;
  imgFilm: string;
  imgEdit: string;
  filmID: any;
  isMobile = false;

  constructor(private adminService: AdminService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    let width = window.innerWidth;
    if (width < 576) {
      this.isMobile = true;
    }
    this.createForm();
    this.getListFilmPaginate(1);
    this.date2 = this.datePipe.transform(this.date1, "yyyy-MM-dd")

  }

  createForm() {
    this.addFilmForm = new FormGroup({
      filmID: new FormControl("", [
      ]),
      filmName: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      slugFilm: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      trailer: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      imgFilm: new FormControl(""),
      description: new FormControl("", [Validators.required]),
      premiereDate: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      rate: new FormControl("", [
        Validators.minLength(1),
        Validators.maxLength(2)
      ])
    });

    this.addShowTimeForm = new FormGroup({
      showTime: new FormControl(""),
      theaterID: new FormControl(""),
      ticketPrice: new FormControl("")
    });
  }

  getListFilmPaginate(pageNumber: any) {
    this.adminService.getListFilmPaginate(pageNumber).subscribe(
      res => {
        this.listFilm = res;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  getPage(pageNumber: any) {
    this.getListFilmPaginate(pageNumber);
  }

  //Hàm này dùng để truyền tổng số trang vào, sau đó chuyển nó thành mảng với số phần tử bằng với số trang để sử dụng được *ngFor
  counter(i: number) {
    return new Array(i);
  }

  next() {
    this.getListFilmPaginate(this.listFilm.currentPage + 1);
  }

  previous() {
    this.getListFilmPaginate(this.listFilm.currentPage - 1);
  }

  setUpAddFilm() {
    this.addFilmForm.reset();
    this.formTitle = "Thêm phim mới";
    this.isEdit = false;
    this.isError = false;
  }

  addFilm() {
    this.film.maPhim = Math.floor(Math.random() * 99999)
    // this.film.maPhim = this.addFilmForm.get("filmID").value;
    this.film.tenPhim = this.addFilmForm.get("filmName").value;
    this.film.biDanh = this.addFilmForm.get("slugFilm").value;
    this.film.trailer = this.addFilmForm.get("trailer").value;
    // this.film.hinhAnh = this.film.tenPhim + ".jpg";
    this.film.hinhAnh = this.imgFilm;
    this.film.moTa = this.addFilmForm.get("description").value;
    this.film.ngayKhoiChieu = this.getDate(
      this.addFilmForm.get("premiereDate").value
    );
    this.film.danhGia = "0"
    this.film.maNhom = configs.groupID;
    this.adminService.postAddFilm(this.film).subscribe(
      res => {
        let frmData = new FormData();
        // frmData.append("File", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png");
        // frmData.append("File", this.imgFilm, this.film.tenPhim + "gr10.jpg");
        frmData.append("File", this.imgFilm);
        // frmData.append("tenPhim", this.film.tenPhim);
        // frmData.append("maNhom", configs.groupID);

        this.adminService
          .postUploadImgFilm(frmData)
          .subscribe(
            res => {
              this.getListFilmPaginate(this.listFilm.currentPage);
              $(".close").click();
              $("#showAlertAddSuccess").click();
            },
            error => {
              this.isError = true;
              this.error = error.error;
              console.log(this.error);
            }
          );
      },
      error => {
        this.isError = true;
        this.error = error.error;
        console.log(this.error)
      }
    );
  }

  // onFileSelect(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.imgFilm = file;
  //   }
  // }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = "../../../../assets/home/images/not-image.png"
      this.imgFilm = file;
    }
  }

  setFilmDelete(filmID: string) {
    this.filmIdDelete = filmID;
  }

  deleteFilm() {
    // let userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
    // userAdmin.maLoaiNguoiDung = "QuanTri"
    this.adminService.deleteFilm(this.filmIdDelete).subscribe(
      res => {
        this.getListFilmPaginate(this.listFilm.currentPage);
        $("#showAlertDeleteSuccess").click();
      },
      error => {
        this.isError = true;
        this.error = error
        console.log(this.error);
      }
    );
  }

  editFilm(filmID: any) {
    this.addFilmForm.reset();
    this.formTitle = "Chỉnh sửa thông tin phim";
    this.isEdit = true;
    this.isError = false
    this.adminService.getSearchFilm(filmID).subscribe(
      res => {
        this.addFilmForm.get("filmID").setValue(res.maPhim);
        this.addFilmForm.get("filmName").setValue(res.tenPhim);
        this.addFilmForm.get("slugFilm").setValue(res.biDanh);
        this.addFilmForm.get("trailer").setValue(res.trailer);
        this.imgEdit = res.hinhAnh;
        this.addFilmForm.get("description").setValue(res.moTa);
        this.addFilmForm.get("premiereDate").setValue(res.ngayKhoiChieu);
        this.addFilmForm.get("rate").setValue(res.danhGia);
      },
      error => {
        this.isError = true;
        this.error = error.error
        console.log(this.error);
      }
    );
  }

  confirmEdit() {
    this.film.maPhim = this.addFilmForm.get("filmID").value;
    this.film.tenPhim = this.addFilmForm.get("filmName").value;
    this.film.biDanh = this.addFilmForm.get("slugFilm").value;
    this.film.trailer = this.addFilmForm.get("trailer").value;
    this.film.hinhAnh = this.imgFilm;
    this.film.moTa = this.addFilmForm.get("description").value;
    this.film.ngayKhoiChieu = this.getDate(
      this.addFilmForm.get("premiereDate").value
    );
    this.film.danhGia = this.addFilmForm.get("rate").value;
    this.film.maNhom = configs.groupID;
    console.log(this.film);
    this.adminService.postUpdateFilm(this.film).subscribe(
      res => {
        if (this.addFilmForm.get("imgFilm").value) {
          console.log(this.imgFilm);
          let frmData = new FormData();
          frmData.append("File", this.imgFilm, this.film.tenPhim + "gr11.jpg");
          frmData.append("tenPhim", this.film.tenPhim);
          frmData.append("maNhom", configs.groupID);

          this.adminService
            .postUploadImgFilm(frmData)
            .subscribe(
              res => {
                this.getListFilmPaginate(this.listFilm.currentPage);
                $(".close").click();
                $("#showAlertAddSuccess").click();
              },
              error => {
                this.isError = true;
                this.error = error.error;
                console.log(this.error);

              }
            );
        } else {
          this.getListFilmPaginate(this.listFilm.currentPage);
          $(".close").click();
          $("#showAlertAddSuccess").click();
        }
        console.log(res);
      },
      error => {
        this.isError = true;
        this.error = error.error;
        console.log(this.error);
      }
    );
  }

  getDate(date: any) {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    date = day + "/" + month + "/" + year;
    return date;
  }

  setFilmID(filmID: any) {
    this.filmID = filmID;
  }
}


