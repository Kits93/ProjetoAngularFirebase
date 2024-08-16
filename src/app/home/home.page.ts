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

  segment: string = 'usuarios';

  usuarios = [
    {
      foto: '',
      nome: 'Dolores Fuertes de Barriga',
      idade: 20,
      genero: 'Feminino',
      rotinas: [
        { dia: 'segunda-feira',  treinos: [ 'Supino Fresco', 'Rosca Estreita', 'Mesa Esticadora'] },
        { dia: 'quarta-feira',  treinos: [ 'Crucifixo Henri', 'Trícips Corda', 'Remada Costelinha'] },
        { dia: 'sexta-feira',  treinos: [ 'Tríceps do Hulk', 'Good Morning Papai', 'Agachamento Sumô' ] },
        
      ]
    },
    {
      foto: '',
      nome: 'Marciano Verdinho Silva',
      idade: 30,
      genero: 'Masculino',
      rotinas: [
        {
          dia: 'terça-feira', 
          treinos: [
            'Supino',
            'Rosca Direta',
            'Mesa Flexora'
          ]
        },
        {
          dia: 'quinta-feira', 
          treinos: [
            'Crucifixo',
            'Supino Fechado',
            'Tríceps Coice'
          ]
        },
        {
          dia: 'sábado-feira', 
          treinos: [
            'Tríceps Corda',
            'Tríceps Francesa',
            'Pulley'
          ]
        }
      ]
    }
  ]
  
  constructor(){}

  trocar(event: any){
    this.segment = event.detail.value;
  }

}
