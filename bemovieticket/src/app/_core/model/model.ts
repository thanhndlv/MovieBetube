export class infoUser {
    public taiKhoan: string;
    public matKhau: string;
    public email: string;
    public soDt: string;
    public maNhom: string;
    public maLoaiNguoiDung: string;
    public hoTen: string;
}
export class getInfoUser {
    public taikhoan: string;
}
export class Film {
    public maPhim: number;
    public tenPhim: string;
    public biDanh: string;
    public trailer: string;
    public hinhAnh: string;
    public moTa: string;
    public maNhom: string;
    public ngayKhoiChieu: string;
    public danhGia: number;
}
export class showTime {
    public maPhim: number;
    public ngayChieuGioChieu: string;
    public maRap: number;
    public giaVe: string;

}
export class listTicket {
    public maLichChieu: number;
    public danhSachVe: ticket[];
}
export class ticket {
    public maGhe: string;
    public giaVe: number;
}