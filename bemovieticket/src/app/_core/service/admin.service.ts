import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, from, Observable } from 'rxjs';
import { configs } from '../config';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL = {
    postAddUser: configs.domain + configs.apiRouter.admin.user.postAddUser,
    putUpdateUser: configs.domain + configs.apiRouter.admin.user.putUpdateUser,
    deleteUser: configs.domain + configs.apiRouter.admin.user.deleteUser,
    getUserType: configs.domain + configs.apiRouter.admin.user.getUserType,
    getInfoUser: configs.domain + configs.apiRouter.admin.user.getInfoUser + configs.groupID,
    getListUserPaginate: configs.domain + configs.apiRouter.admin.user.getListUserPaginate + configs.groupID,
    getSearchUser: configs.domain + configs.apiRouter.admin.user.getSearchUser + configs.groupID,
    postCreateShowtime: configs.domain + configs.apiRouter.admin.film.postCreateShowtime,
    getListFilm: configs.domain + configs.apiRouter.admin.film.getListFilm + configs.groupID,
    getListPaginate: configs.domain + configs.apiRouter.admin.film.getListPaginate + configs.groupID,
    getListFilmDay: configs.domain + configs.apiRouter.admin.film.getListFilmDay + configs.groupID,
    postAddFilm: configs.domain + configs.apiRouter.admin.film.postAddFilm,
    putDemo: configs.domain + configs.apiRouter.admin.film.putDemo,
    putAddImage: configs.domain + configs.apiRouter.admin.film.putAddImage,
    postUpdateFilmUpload: configs.domain + configs.apiRouter.admin.film.postUpdateFilmUpload,
    postUpdateFilm: configs.domain + configs.apiRouter.admin.film.postUpdateFilm,
    getSearchFilm: configs.domain + configs.apiRouter.admin.film.getSearchFilm,
  }
  constructor(private _https = HttpClient) { }


}
