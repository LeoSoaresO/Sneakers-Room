import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage } from "src/app/utils/storage";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SneakersRoom';
  user = getStorage('user')

  constructor(private router: Router){}

  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin(){
    if (this.user) {
      this.router.navigate(['']);
    }
  }


}
