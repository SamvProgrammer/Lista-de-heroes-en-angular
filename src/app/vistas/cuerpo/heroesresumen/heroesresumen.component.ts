import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroesresumen',
  templateUrl: './heroesresumen.component.html',
  styleUrls: ['./heroesresumen.component.css']
})
export class HeroesresumenComponent implements OnInit {
  public arreglo:any[] = [];

  constructor(private routersPrd:ActivatedRoute,private heroesPrd:HeroesService) { }

  ngOnInit(): void {

    this.routersPrd.params.subscribe(parametros=>{
      console.log(parametros);
      this.arreglo =  this.heroesPrd.buscandoheroe(parametros["cadena"]);
      console.log(this.arreglo);
    });
  }

}
