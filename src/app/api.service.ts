import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from 'src/environments/environment';
import { getStorage } from "src/app/utils/storage";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token:any = getStorage('token');

  private optionsHeader = {
    headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400'
      })
  }

  private auth = {
    headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.token}`,
				'email': `${this.token.email}`
      })
  }

  constructor(
    private http: HttpClient
  ) { }

  getDataHome() {
    return this.http.get(`${API.URL}/home`)
  }

  getRelease() {
    return this.http.get(`${API.URL}/release`)
  }

  getWCollection() {
    return this.http.get(`${API.URL}/women`)
  }

  register(data:any) {
    return this.http.post(`${API.URL}/register`, data, this.optionsHeader)
  }

  login(data:any) {
    return this.http.post(`${API.URL}/login`, data, this.optionsHeader)
  }

  getUser(data:any){
    return this.http.get(`${API.URL}/profile`, this.auth)

  }
}
