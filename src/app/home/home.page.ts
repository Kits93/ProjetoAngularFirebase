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

  segments: string = 'usuarios';

  usuarios = [
    {
      nome: 'Seleide Silva',
      idade: 20,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'segunda-feira',
          treinos: [
            'Rosca Direta',
            'Crucifixo',
            'Remada Sumô'
          ]
        },
        {
          dia: 'quarta-feira',
          treinos: [
            'Rosca Invertida',
            'Pulley',
            'Remada Sentada'
          ]
        },
        {
          dia: 'sexta-feira',
          treinos: [
            'Supino Inclinado',
            'Bíceps Corda',
            'Bíceps Hulk Invertido'
          ]
        },
      ]
    },
    {
      nome: 'Marciano Verdinho',
      idade: 25,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'terça-feira',
          treinos: [
            'Pancha Redonda',
            'Jumping Bom dia Papai',
            'Flexão de Costas'
          ]
        },
        {
          dia: 'quinta-feira',
          treinos: [
            'Rosca Invertida',
            'Pulley',
            'Crunch'
          ]
        },
        {
          dia: 'sábado',
          treinos: [
            'Supino Inclinado',
            'Bíceps Corda',
            'Bíceps Hulk Invertido'
          ]
        },
      ]
    }
  ]

  constructor(){}

  trocar(event: any){
    this.segments = event.detail.value;
  }

}
