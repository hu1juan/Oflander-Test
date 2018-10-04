import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { END_POINT } from '../_config/constants.config';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  constructor(private http: HttpClient) {}

  getPortfolio() {
    return this.http.get(`${environment.API}${END_POINT.PUBLIC.GET_PORTFOLIO}`);
  }

  getCategory() {
    return this.http.get(`${environment.API}${END_POINT.PUBLIC.GET_CATEGORY}`);
  }
}
