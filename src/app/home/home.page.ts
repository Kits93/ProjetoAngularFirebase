import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { NOMEM } from 'dns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paises: any;
  isLoading: boolean = true;

  constructor(
    private router: Router
  ){
    this.getPaisCode();
  }

  getPaisCode(){
    this.isLoading = true;
    fetch('https://restcountries.com/v3.1/all?fields=name,ccn3,flags')
    .then( dados => dados.json() )
    .then(dados => {
      console.log(dados);
      this.paises = dados;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally( () => {
      this.isLoading = false;
    } )
  }

  verDetalhes(ccn3: string){
    this.router.navigate(['/detalhe-pais'], {
      state: { codigo: ccn3 }
    });
  }


}
