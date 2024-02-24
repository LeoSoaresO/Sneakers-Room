import { Component, OnInit } from '@angular/core';
import { convertImageToBase64 } from 'src/app/utils/convertFileToBase64';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  convert = convertImageToBase64;

  src:String = ""
  msg:String = "Faça o upload da sua Imagem"
  file:any;
  uploadIcon = "../../../../assets/img/upload.svg"

  constructor() { }

  ngOnInit(): void {
    this.src = this.uploadIcon
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




}
