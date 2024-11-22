import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
})
export class PlanetasPage implements OnInit {

  planeta: any = {
    nome: null,
    possui_populacao: null,
    massa: null,
    raio: null,
    distancia_sol: null,
    foto: null
  }

  planetas: any = [];

  constructor(
    public crudService: CrudService
  ) {
    this.getPlanetas();
   }

  ngOnInit() {
  }

  salvar() {
    console.log(this.planeta);
    this.crudService.insert(this.planeta, 'planetas');
    this.getPlanetas();
  }

  remover(id: string) {
    this.crudService.remove(id, 'planetas')
    .then(() => {
      this.getPlanetas();
    })
  }

  getPlanetas(){
    this.crudService.fetchAll('planetas')
    .then(resp => {
      console.log(resp);
      this.planetas = resp;
    })

  }

}
