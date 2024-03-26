import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token:any;

  constructor(
    private service: ApiService,
  ) { }

  ngOnInit(): void {
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
