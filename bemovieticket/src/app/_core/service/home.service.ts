import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { domain } from 'process';
import { config, Observable, } from 'rxjs';
import { configs } from '../config';

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
    getInfoTheater: configs.domain + configs.apiRouter.home.getInfoTheater,
    getInfoTheaterByList: configs.domain + configs.apiRouter.home.getInfoTheaterByList,
    getInfoShowtimeTheater: configs.domain + configs.apiRouter.home.getInfoShowtimeTheater + configs.groupID,
    getShowtime: configs.domain + configs.apiRouter.home.getShowtime + configs.params.filmID,
    postTicket: configs.domain + configs.apiRouter.home.postTicket,
    getListTheater: configs.domain + configs.apiRouter.home.getListTheater,
  }
  constructor(private _http: HttpClient) { }
  
}
