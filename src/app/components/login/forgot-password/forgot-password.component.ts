import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from 'src/app/utils/validators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  formTwo: FormGroup
  invalid: boolean = false;
  fieldsEmpty: boolean = true;
  alert: boolean = false;
  step:string = '1'
  validate =  validateEmail;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.createFormsecond()
  }

  createForm(){
    this.form = this.fb.group({
      email: ['', Validators.required]
    })
  }

  createFormsecond(){
    this.formTwo = this.fb.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
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
    if (this.invalid == true) {
        this.fieldsEmpty = true
    } else {
      this.fieldsEmpty = false
    }
  }

  sendEmail(){
    let data = {
      email: this.form.value.email,
    }
    this.step = '2'
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

  reset(){

  }


}
