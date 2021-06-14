import { ClientService } from './../../../_core/service/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  filmId: string;
  filmDetail: any;
  trailer: string;
  isLoading = true;
  isMobile = false;
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    let width = window.innerWidth;
    if (width < 576) {
      this.isMobile = true;
    }
    this.filmId = this.route.snapshot.params.filmID;
    if (this.filmId) {
      this.clientService.getInfoFilm(this.filmId).subscribe(res => {
        this.filmDetail = res;
        let trailer = this.filmDetail.trailer;
        this.trailer = trailer;
        this.isLoading = false;
      });
    }
  }

}