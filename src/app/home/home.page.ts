import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recado = {
    assunto: null
  }

  constructor(
    private crudservice: CrudService
  ){}

  enviar(){
    this.crudservice.insert(this.recado, 'recados');
  }

  perfil = {
    foto: '',
    nome: '',
  }

}
