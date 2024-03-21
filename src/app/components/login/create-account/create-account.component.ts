import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { convertImageToBase64 } from 'src/app/utils/convertFileToBase64';
import { validateEmail } from 'src/app/utils/validators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  convert = convertImageToBase64;
  validate =  validateEmail;

  src:String = ""
  msg:String = "Faça o upload da sua Imagem"
  file:any;
  form: FormGroup;
  invalid: boolean = false;
  fieldsEmpty: boolean = true;
  uploadIcon = "../../../../assets/img/upload.svg"

  constructor(
    private fb: FormBuilder,
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.src = this.uploadIcon
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
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
    if (!this.form.value.name || this.form.value.password === '' || this.invalid == true) {
        this.fieldsEmpty = true
    } else {
      this.fieldsEmpty = false
    }

  }

  uploadPhoto() {
    this.src = this.uploadIcon
    const inputElement = document.getElementById('photo') as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      this.convert(file)
      .then((base64String) => {
        this.src = base64String
        this.file = base64String
        this.msg = "Quer trocar a Imagem ?"
      })
      .catch((error) => {
          console.error('Erro ao converter imagem para base64:', error);
      });
    } else {
      console.error('Nenhum arquivo selecionado');
    }
  }

  removePhoto() {
    this.file = ''
    this.msg = "Faça o upload da sua Imagem"
    this.src = this.uploadIcon
  }

  createAccount(){
      let data = {
        photo: this.file,
        name: this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password,
        role: 'user',
      }

      this.service.register(data).subscribe((res:any) => {
        console.log(res);

      })

    }

}
