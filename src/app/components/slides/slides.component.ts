import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  data:any;

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getDataHome();
  }

  getDataHome(){
    // this.apiService.getDataHome().subscribe((response:any) =>{
    //   console.log(response);
    //   this.data = response;
    // })
  }

}
