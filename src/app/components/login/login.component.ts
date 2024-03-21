import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { validateEmail } from 'src/app/utils/validators';
import { setStorage } from "src/app/utils/storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  invalid: boolean = false;
  fieldsEmpty: boolean = true;
  validate =  validateEmail;
  set =  setStorage;

  constructor(
    private fb: FormBuilder,
    private service: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  validateEmail(){
    if(this.validate(this.form.value.email)){
      this.invalid = false
    }else{
      this.invalid = true
    }
  }

  checkForm(){
    if (this.form.value.password  === '' || this.invalid == true) {
        this.fieldsEmpty = true
    } else {
      this.fieldsEmpty = false
    }
  }

  login(){
    let data = {
      email: this.form.value.email,
      password: this.form.value.password,
    }

    this.service.login(data).subscribe((res:any) => {
      if(res.token){
        this.set('token', res.token)
        this.router.navigate(['']);
      }
    })
  }

}
