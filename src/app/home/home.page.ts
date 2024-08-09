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

  pessoa = {
    foto: `https://i.pinimg.com/736x/29/66/d1/2966d11abca07e3cb869b1f9700ad71d.jpg`,
    nome: `Barrigudinha Seleide`,
    objetivo: `Programador HTML & CSS`,
    contato: {
      telefone: '966666666',
      email: 'seleide@hotmail.com',
      github: 'github.com/seleide',
      linkedin: 'linkedin.com/seleide'
    },
    softskills: [
      'Comunicação',
      'Trabalho em Equipe',
      'Proatividade',
      'Criatividade',
      'Inovação'
    ],
    formacao_academica: [
      {
        ano_inicio: '2023',
        ano_fim: '2025',
        instituicao: 'Etec Sales Gomes',
        curso: 'Desenvolvimento de Sistemas'
      },
      {
        ano_inicio: '2025',
        ano_fim: '2028',
        instituicao: 'Faculdade de Tencologia de Tatui - Fatec',
        curso: 'Análise e Desenvolvimento de Sistemas'
      }
    ]
  }


  constructor(){
    this.teste();
  }

  teste(){
    console.log(this.pessoa);
  }

  

  
}
