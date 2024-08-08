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
    foto: 'https://professionalmoron.com/wp-content/uploads/2012/05/alpaca-985158_640.jpg',
    nome: 'Barrigudinha Seleide',
    objetivo: 'Programador HTML & CSS',
    contato: {
      email: 'seleide@hotmail.com',
      telefone: '99999999',
      github: 'gitbhub.com/seleide',
      linkedin: 'linked.com/seleide'
    },
    softskills: [
      'Comunicação',
      'Proatividade',
      'Trabalho em Grupo',
      'Liderança',
      'Resiliência',
      'Criatividade'
    ],
    formacao: [
      {
        ano_inicio: '2023',
        ano_termino: '2024',
        instituicao: 'Etec Sales Gomes',
        curso: 'Desenvolvimento de Sistemas'
      },
      {
        ano_inicio: '2025',
        ano_termino: '2028',
        instituicao: 'Faculdade de Tecnologia de Tatuí',
        curso: 'Análise e Desenvolvimento de Sistemas'
      }
    ]

  }
  constructor(){ }

  
}
