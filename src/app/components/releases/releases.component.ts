import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  releaseData:any;

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getReleases();
  }

  getReleases(){
    // this.apiService.getRelease().subscribe((response:any) =>{
    //   console.log(response);
    //   this.releaseData = response;
    // })
  }

}
