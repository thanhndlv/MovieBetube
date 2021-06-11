export const configs = {
  domain: "https://movie0706.cybersoft.edu.vn/",
  groupID: "GP10",
  userType: {
    admin: "QuanTri",
    user: "KhachHang"
  },
  apiRouter: {
    home: {
      postSignIn: "/api/QuanLyNguoiDung/DangNhap",
      postSignUp: "/api/QuanLyNguoiDung/DangKy",
      getInfoUser: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      putChangeInfoUser: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      getListFilm: "/api/QuanLyPhim/LayDanhSachPhim?maNhom=",
      getListFilmByDay: "/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=",
      getInfoFilm: "/api/QuanLyPhim/LayThongTinPhim?MaPhim=",
      getListSystemTheaters: "/api/QuanLyRap/LayThongTinHeThongRap", //tunv edited
      getListTheaters: "/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=", //tunv edited
      getInfoShowtimeTheater: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=",
      getShowtime: "/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=",
      postTicket: "/api/QuanLyDatVe/DatVe",
      getListTicketRoom: "/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=", //tunv edited

    },
    admin: {
      user: {
        postAddUser: "/api/QuanLyNguoiDung/ThemNguoiDung",
        deleteUser: "/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=",
        putUpdateUser: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        getSearchUser: "/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=",
        getListUser: "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=",
        getListUserPaginate: "/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom="
      },
      film: {
        postAddFilm: "/api/QuanLyPhim/ThemPhim",
        deleteFilm: "/api/QuanLyPhim/XoaPhim?MaPhim=",
        postUpdateFilm: "/api/QuanLyPhim/CapNhatPhim",
        postUploadImgFilm: "/api/QuanLyPhim/UploadHinhAnhPhim",
        getListFilmPaginate: "/api/QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=",
        getSearchFilm: "/api/QuanLyPhim/LayThongTinPhim?MaPhim=",
        postAddShowTime: "/api/QuanLyDatVe/TaoLichChieu"
      },
      showTimes: {
        postAddShowTime: "/api/QuanLyDatVe/TaoLichChieu"
      }
    }
  },
  params: {
    filmID: "&MaPhim=",
    filmName: "&tenPhim=",
    systemTheaterID: "&maHeThongRap=",
    groupID: "&MaNhom=",
    pageSetUp: "&soPhanTuTrenTrang=10&soTrang=",
  }
};
