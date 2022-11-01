import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getDataHome() {
    return this.http.get(`${API.URL}/home`)
  }

  getRelease() {
    return this.http.get(`${API.URL}/release`)
  }
}
