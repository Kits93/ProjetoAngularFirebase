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
    assunto: null,
    mensagem: null
  }

  recados: any = [];

  constructor(
    public crudService: CrudService
  ){}

  enviar(){
    this.crudService.insert(this.recado, 'recados');
  }

  carregar(){
    this.recados = [];
    this.crudService.fetchAll('recados')
    .then((response) => {
      this.recados = response;
      console.log(this.recados);
    })
    .catch((erro) => {
      console.log(erro);
    })
    .finally(() => {
      console.log('processo finalizado!');
    })
  }

  remover(id: string){
    this.crudService.remove(id, 'recados');
    this.carregar();
  }

}
