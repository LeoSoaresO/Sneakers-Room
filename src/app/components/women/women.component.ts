import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  womenCollection:any;

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getWCollection();
  }

  getWCollection(){
    this.apiService.getWCollection().subscribe((response:any) =>{
      console.log(response);
      this.womenCollection = response;
    })
  }

}
