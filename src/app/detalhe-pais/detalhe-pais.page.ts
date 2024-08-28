import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-pais',
  templateUrl: './detalhe-pais.page.html',
  styleUrls: ['./detalhe-pais.page.scss'],
})
export class DetalhePaisPage implements OnInit {

  codigo: any;
  pais: any;

  constructor() { }

  ngOnInit() {
    this.codigo = history.state.codigo;
    fetch(`https://restcountries.com/v3.1/alpha/${this.codigo}`)
    .then((dados) => dados.json())
    .then(dados => {
       console.log(dados);
       this.pais = dados;
    })
    .catch(erro => { console.log(erro); })
    .finally(() => { console.log('finalizado!'); })
  }


}
