import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { domain } from 'process';
import { config, Observable, } from 'rxjs';
import { configs } from '../config';
import { Film } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  API_URL = {
    postSignIn: configs.domain + configs.apiRouter.home.postSignIn,
    postSignUp: configs.domain + configs.apiRouter.home.postSignUp,
    getInfoUser: configs.domain + configs.apiRouter.home.getInfoUser,
    putChangeInfoUser: configs.domain + configs.apiRouter.home.putChangeInfoUser,
    getListFilm: configs.domain + configs.apiRouter.home.getListFilm + configs.groupID,
    getListFilmByDay: configs.domain + configs.apiRouter.home.getListFilmByDay + configs.groupID,
    getInfoFilm: configs.domain + configs.apiRouter.home.getInfoFilm + configs.params.filmID,
    getListSystemTheaters: configs.domain + configs.apiRouter.home.getListSystemTheaters, //tunv edited
    getListTheaters: configs.domain + configs.apiRouter.home.getListTheaters, //tunv edited
    getInfoShowtimeTheater: configs.domain + configs.apiRouter.home.getInfoShowtimeTheater + configs.groupID,
    getShowtime: configs.domain + configs.apiRouter.home.getShowtime + configs.params.filmID,
    postTicket: configs.domain + configs.apiRouter.home.postTicket,
    getListTicketRoom: configs.domain + configs.apiRouter.home.getListTicketRoom, //tunv edited
  }
  constructor(private _http: HttpClient) { }

  getListFilms(): Observable<any> {
    let result = this._http.get<any>(this.API_URL.getListFilm)
    return result;
  }

  getListSystemTheaters(): Observable<any> {
    let result = this._http.get<any>(this.API_URL.getListSystemTheaters)
    return result;
  }

  getListTheaters(systemTheaterId: string): Observable<any> {
    let result = this._http.get<any>(this.API_URL.getListTheaters + systemTheaterId)
    return result;
  }

  getInfoShowtimeTheater(systemTheaterId: string): Observable<any> {
    let result = this._http.get<any>(this.API_URL.getInfoShowtimeTheater + configs.params.systemTheaterID + systemTheaterId)
    return result
  }

  async postSignIn(username: string, password: string): Promise<any> {
    let result = await this._http.post<any>(this.API_URL.postSignIn, {
      taiKhoan: username,
      matKhau: password
    }).toPromise();
    if (result.accessToken) {
      localStorage.setItem('Token', result.accessToken)
    }
    console.log(result);
    return result;
  }

  
  public postSignUp(user: any): Observable<any> {
    let header = new HttpHeaders({ "Content-Type": "application/json" });
    let result: any = this._http.post(this.API_URL.postSignUp, user, {
      headers: header,
      responseType: "json"
    });
    return result;
  }
  public getInfoUser(userName: string, token): Observable<any[]> {
    let header = new HttpHeaders({ "Content-Type": "application/json", Authorization: "Bearer " + token });
    let result: any = this._http.post(this.API_URL.getInfoUser, { taiKhoan: userName },
      {
        headers: header
      }

    );
    return result;
  }
  public putChangeInfoUser(userInfo: string, token: string): Observable<any[]> {
    let header = new HttpHeaders({ "Content-Type": "application/json", Authorization: "Bearer " + token });
    let result: any = this._http.post(this.API_URL.putChangeInfoUser, userInfo, {
      headers: header
    });
    return result;
  }

  public getListTicketRoom(systemTheaterID: string): Observable<any> {
    let result: any = this._http.get(
      this.API_URL.getListTicketRoom + systemTheaterID
    );
    return result;
  }

  postBookingTicket(bookingInfo: any, token: string): Observable<any> {
    let header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    });
    let result: any = this._http.post(
      this.API_URL.postTicket,
      bookingInfo,
      { headers: header, responseType: "text" }
    );
    return result;
  }
}
