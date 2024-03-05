import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from 'src/app/utils/validators';

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

  constructor(
    private fb: FormBuilder
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
  }

}
