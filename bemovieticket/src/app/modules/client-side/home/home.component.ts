import { ClientService } from './../../../_core/service/client.service';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Image banner
  images = [
    "assets/home/images/banner/FrozenII.jpg",
    "assets/home/images/banner/Joker.jpg",
    "assets/home/images/banner/Endgame.jpg"
  ];

  listFilms: any[] = []
  listSystemTheaters: any[] = []
  listTheaters: any[] = []
  listFilmsOfTheater: any
  listShowTimeOfFilm: any[] = [];
  listDate: any[] = [];
  listTime: any[] = [];

  systemTheaterId: string;
  showTimeId: any;
  theaterId: string;
  filmId: string
  isInitShowTime: boolean = true;
  isMobile = false;

  fastBookingForm: FormGroup

  constructor(private clientService: ClientService, configRating: NgbRatingConfig) {
    //Cài đặt rating
    configRating.max = 5;
    configRating.readonly = true;
    //Form đặt vé nhanh
    this.fastBookingForm = new FormGroup({
      sltSystem: new FormControl(""),
      sltTheater: new FormControl(""),
      sltFilm: new FormControl(""),
      sltDate: new FormControl(""),
      sltTime: new FormControl("")
    })
  }

  ngOnInit(): void {
    let width = window.innerWidth;
    if (width < 576) {
      this.isMobile = true;
    }
    this.getListFilms()
    this.getListSystemTheaters()
  }

  //lấy list phim
  getListFilms() {
    this.clientService.getListFilms().subscribe(res => {
      this.listFilms = res
    })
  }

  //lấy list hệ thống rạp
  getListSystemTheaters() {
    this.clientService.getListSystemTheaters().subscribe(res => {
      this.listSystemTheaters = res
      this.showTheaters(this.listSystemTheaters[0].maHeThongRap, 1);
    })
  }

  // Lấy danh sách các cụm rạp sau khi chọn hệ thống rạp
  showTheaters(systemTheaterID: string, type: number = 0) {
    if (type == 0) {
      //Reset lại select Rạp, Phim, Ngày xem, Suất chiếu nếu khách hàng đã chọn trước đó
      if (this.listTheaters.length > 0) {
        this.listFilmsOfTheater = [];
        this.listDate = [];
        this.listTime = [];
        this.fastBookingForm.controls["sltTheater"].setValue("");
        this.fastBookingForm.controls["sltFilm"].setValue("");
        this.fastBookingForm.controls["sltDate"].setValue("");
        this.fastBookingForm.controls["sltTime"].setValue("");
      }
      this.clientService.getListTheaters(systemTheaterID).subscribe(
        listTheaters => {
          this.listTheaters = listTheaters;
        },
        error => {
          console.log(error.error);
        }
      );
    } else {
      if (!this.isInitShowTime) {
        this.systemTheaterId = systemTheaterID;
        this.clientService.getListTheaters(systemTheaterID).subscribe(
          listTheaters => {
            this.listTheaters = listTheaters;
          },
          error => {
            console.log(error.error);
          }
        );
      } else {
        this.isInitShowTime = false;
        this.systemTheaterId = systemTheaterID;
        this.clientService.getListTheaters(systemTheaterID).subscribe(
          listTheaters => {
            this.listTheaters = listTheaters;
            this.showFilmsOfTheater(this.listTheaters[0].maCumRap, 1);
          },
          error => {
            console.log(error.error);
          }
        );
      }
    }
  }

  //lấy danh sách phim theo cụm rạp
  showFilmsOfTheater(theaterID: string, type: number = 0) {
    if (type == 0) {
      if (this.listFilmsOfTheater) {
        this.listFilmsOfTheater = [];
        this.listDate = [];
        this.listTime = [];
        this.fastBookingForm.controls["sltFilm"].setValue("");
        this.fastBookingForm.controls["sltDate"].setValue("");
        this.fastBookingForm.controls["sltTime"].setValue("");
      }
      this.clientService
        .getInfoShowtimeTheater(
          this.fastBookingForm.controls["sltSystem"].value
        )
        .subscribe(
          res => {
            let listTheaters = res[0].lstCumRap;
            let hasShowTime = listTheaters.find(x => x.maCumRap == theaterID);
            if (hasShowTime) {
              this.listFilmsOfTheater = hasShowTime.danhSachPhim;
              // console.log(this.listFilmsOfTheater);
            }
          }
        );
    } else {
      if (!this.isInitShowTime) {
        this.theaterId = theaterID
        this.clientService.getInfoShowtimeTheater(this.systemTheaterId).subscribe(res => {
          let listTheaters = res[0].lstCumRap;
          let hasShowTime = listTheaters.find(x => x.maCumRap == theaterID)
          if (hasShowTime) {
            this.listFilmsOfTheater = hasShowTime.danhSachPhim
          }
        })
      } else {
        this.isInitShowTime = false
        // this.showDate()
      }
    }
  }

  //lấy danh sách ngày chiếu của phim đã chọn
  showDate(filmID: string) {
    if (this.listDate) {
      this.listDate = [];
      this.listTime = [];
      this.fastBookingForm.controls["sltDate"].setValue("");
      this.fastBookingForm.controls["sltTime"].setValue("");
    }
    let listDateOfFilm = this.listFilmsOfTheater.find(x => x.maPhim == filmID).lstLichChieuTheoPhim;
    let phimID = this.listFilmsOfTheater.find(x => x.maPhim == filmID).maPhim
    let listDate = listDateOfFilm.map(showDate => {
      return showDate.ngayChieuGioChieu.substring(0, 10)
      // return {
      //   filmID: this.listFilmsOfTheater.find(x => x.maPhim == filmID).maPhim,
      //   _date: showDate.ngayChieuGioChieu.substring(0, 10)
      // }
    })

    this.listDate = [...new Set(listDate)]
    this.filmId = phimID
  }

  showTime(date: string, type: number = 0) {
    if (this.listTime) {
      this.listTime = [];
      this.fastBookingForm.controls["sltTime"].setValue("");
    }
    // let indexFilm = this.listFilmId.findIndex(x => x.id == filmID)
    // let maPhim = this.listFilmId[indexFilm].id
    // let indexDate = this.listDate.findIndex(x => x._date == date)
    //console.log(this.filmId);
    let listShowTime = this.listFilmsOfTheater.find(x => x.maPhim == this.filmId).lstLichChieuTheoPhim;
    let listTime = listShowTime.filter(x => x.ngayChieuGioChieu.substring(0, 10) == date)
    listTime = listTime.map(x => {
      return {
        time: x.ngayChieuGioChieu.substring(11, 16),
        showTimeID: x.maLichChieu
      }
    })
    this.listTime = [...new Set(listTime)]
  }

  setShowTimeID(showTimeID: any) {
    this.showTimeId = showTimeID;
  }






  //Cài đặt Slick slider
  slideConfig = { slidesToShow: 5, slidesToScroll: 5, prevArrow: '<button style="position: absolute;top: 50%;left: -3%;border: none;background: none;transform: translate(0, -50%);outline: none;color: #3e515d;" class="prev-arrow"><i class="fa fa-chevron-left fa-2x"></i></button>', nextArrow: '<button style="position: absolute;top: 50%;right: -3%;border: none;background: none;transform: translate(0, -50%);outline: none;color: #3e515d;" class="prev-arrow"><i class="fa fa-chevron-right fa-2x"></i></button>' };
  slideConfigMobile = { slidesToShow: 1, slidesToScroll: 1, prevArrow: '<button style="position: absolute;top: 50%;left: -3%;border: none;background: none;transform: translate(0, -50%);outline: none;color: #3e515d;" class="prev-arrow"><i class="fa fa-chevron-left fa-2x"></i></button>', nextArrow: '<button style="position: absolute;top: 50%;right: -3%;border: none;background: none;transform: translate(0, -50%);outline: none;color: #3e515d;" class="prev-arrow"><i class="fa fa-chevron-right fa-2x"></i></button>' };
}

