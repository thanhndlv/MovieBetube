import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { configs } from "../config";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  API_URL = {
    postAddUser: configs.domain + configs.apiRouter.admin.user.postAddUser,
    getListUser:
      configs.domain +
      configs.apiRouter.admin.user.getListUser +
      configs.groupID,
    getListUserPaginate:
      configs.domain +
      configs.apiRouter.admin.user.getListUserPaginate +
      configs.groupID +
      configs.params.pageSetUp,
    getSearchUser: configs.domain + configs.apiRouter.admin.user.getSearchUser,
    deleteUser: configs.domain + configs.apiRouter.admin.user.deleteUser,
    putUpdateUser: configs.domain + configs.apiRouter.admin.user.putUpdateUser,
    getListFilmPaginate:
      configs.domain +
      configs.apiRouter.admin.film.getListFilmPaginate +
      configs.groupID +
      configs.params.pageSetUp,
    postAddFilm: configs.domain + configs.apiRouter.admin.film.postAddFilm,
    postUploadImgFilm:
      configs.domain + configs.apiRouter.admin.film.postUploadImgFilm,
    deleteFilm: configs.domain + configs.apiRouter.admin.film.deleteFilm,
    getSearchFilm: configs.domain + configs.apiRouter.admin.film.getSearchFilm,
    postUpdateFilm:
      configs.domain + configs.apiRouter.admin.film.postUpdateFilm,
    postAddShowTime:
      configs.domain + configs.apiRouter.admin.film.postAddShowTime,
    getListShowtimes: configs.domain + configs.apiRouter.home.getShowtime,
  };


  constructor(private _http: HttpClient) { }

  // User API
  postAddUser(userInfo: any): Observable<any> {
    let result = this._http.post(this.API_URL.postAddUser, userInfo, {
      responseType: "json"
    });
    return result;
  }

  getListUser(): Observable<any[]> {
    let result: any = this._http.get(this.API_URL.getListUser);
    return result;
  }

  getListUserPaginate(pageNumber: any): Observable<any> {
    let result: any = this._http.get(
      this.API_URL.getListUserPaginate + pageNumber
    );
    return result;
  }

  getSearchUser(userName: any): Observable<any> {
    let result: any = this._http.get(
      this.API_URL.getSearchUser +
      userName +
      configs.params.groupID +
      configs.groupID
    );
    return result;
  }

  deleteUser(userName: any): Observable<any> {
    let result: any = this._http.delete(this.API_URL.deleteUser + userName, {
      responseType: "text"
    });
    return result;
  }

  putUpdateUser(userInfo: any): Observable<any> {
    let result: any = this._http.put(this.API_URL.putUpdateUser, userInfo, {
      responseType: "text"
    });
    return result;
  }

  // End User API

  //  Film API

  getListFilmPaginate(pageNumber: any): Observable<any> {
    let result: any = this._http.get(
      this.API_URL.getListFilmPaginate + pageNumber
    );
    return result;
  }

  postAddFilm(film: any): Observable<any> {
    let result = this._http.post(this.API_URL.postAddFilm, film, {
      responseType: "json"
    });
    return result;
  }

  postUploadImgFilm(data: any): Observable<any> {
    let result = this._http.post(this.API_URL.postUploadImgFilm, data, {
      responseType: "text",
    });
    return result;
  }

  deleteFilm(filmID: any): Observable<any> {
    let result = this._http.delete(this.API_URL.deleteFilm + filmID, {
      responseType: "text"
    });
    return result;
  }

  getSearchFilm(filmID: any): Observable<any> {
    let result: any = this._http.get(this.API_URL.getSearchFilm + filmID);
    return result;
  }

  postUpdateFilm(filmInfo: any): Observable<any> {
    let result: any = this._http.post(this.API_URL.postUpdateFilm, filmInfo, {
      responseType: "text"
    });
    return result;
  }

  postAddShowTime(showTimeInfo: any): Observable<any> {
    let result: any = this._http.post(
      this.API_URL.postAddShowTime,
      showTimeInfo,
      { responseType: "text" }
    );
    return result;
  }

  // End Film API

  // Showtime API
  getListShowtimes(filmID: string): Observable<any> {
    let result: any = this._http.get(this.API_URL.getListShowtimes + filmID);
    return result;
  }
  // End Showtime API

  // createHeaderWithAuth(token: string): HttpHeaders {
  //   return new HttpHeaders({
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + token
  //   });
  // }

  // createHeaderWithAuthNotContentType(token: string): HttpHeaders {
  //   return new HttpHeaders({
  //     Authorization: "Bearer " + token
  //   });
  // }
}
