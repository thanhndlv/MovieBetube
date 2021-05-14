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
            getInfoTheater: "/api/QuanLyRap/LayThongTinHeThongRap",
            getInfoTheaterByList: "/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=",
            getInfoShowtimeTheater: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=",
            getShowtime: "/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=",
            postTicket: "/api/QuanLyDatVe/DatVe",
            getListTheater: "/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=",
        },
        admin: {
            user: {
                postAddUser: "/api/QuanLyNguoiDung/ThemNguoiDung",
                putUpdateUser: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                deleteUser: "/api/QuanLyNguoiDung/XoaNguoiDung",
                getUserType: "/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
                getInfoUser: "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=",
                getListUserPaginate: "/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=",
                getSearchUser: "/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=",

            },
            film: {
                postCreateShowtime: "/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=",
                getListFilm: "/api/QuanLyPhim/LayDanhSachPhim?maNhom",
                getListPaginate: "/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=",
                getListFilmDay: "api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=",
                postAddFilm: "/api/QuanLyPhim/ThemPhim",
                putDemo: "/api/QuanLyPhim/demo",
                putAddImage: "/api/QuanLyPhim/UploadHinhAnhPhim",
                postUpdateFilmUpload: "/api/QuanLyPhim/CapNhatPhimUpload",
                postUpdateFilm: "/api/QuanLyPhim/CapNhatPhim",
                getSearchFilm: "/api/QuanLyPhim/LayThongTinPhim",
            }

        },

    },
    params: {
        filmID: "&MaPhim=",
        filmName: "&tenPhim=",
        listTheaterID: "&maHeThongRap=",
        groupID: "&MaNhom=",
        pageSetUp: "&soPhanTuTrenTrang=10&soTrang="
    }
}