import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkLogin } from "src/app/utils/checkLogin";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SneakersRoom';
	check = checkLogin

  constructor(private router: Router){}

  ngOnInit(): void {
    this.check()
  }

}
