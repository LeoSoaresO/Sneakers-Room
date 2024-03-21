import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { getStorage } from "src/app/utils/storage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get = getStorage;
  token:any;

  constructor(
    private service: ApiService,
  ) { }

  ngOnInit(): void {
    this.token = this.get('token');
    this.getUser();
  }

  getUser(){
    console.log(this.token);

    if (this.token) {
      this.service.getUser(this.token).subscribe((res:any) =>{
        console.log(res);
      })
    }
  }

}
