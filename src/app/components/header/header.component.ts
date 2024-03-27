import { Component, OnInit } from '@angular/core';
import { rmStorage, getStorage } from 'src/app/utils/storage';
import { checkLogin} from 'src/app/utils/checkLogin';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	token = getStorage('token')
	remove = rmStorage
	check = checkLogin
	logged:boolean = false;
	user:any;

  constructor(
    private service: ApiService,
	) { }

  ngOnInit(): void {
		this.controlLogin()
		this.getUser()
  }

	getUser(){
    if (this.token) {
			let d = {
				email: this.token.email,
				token: this.token.token
			}
      this.service.getUser(d).subscribe((res:any) =>{
        this.user = res
				console.log(this.user);

      })
    }
  }

  logout(){
		this.remove('token')
  }

	controlLogin(){
		if (this.check()) {
			this.logged = true
		}	else {
			this.logged = false
		}
	}

}
