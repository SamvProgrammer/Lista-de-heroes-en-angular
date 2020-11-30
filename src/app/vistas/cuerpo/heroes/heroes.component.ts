import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  public arreglo;

  constructor(private heroesPrd:HeroesService) {

    this.arreglo = this.heroesPrd.getHeroes();
    console.log(this.arreglo);
   }

  ngOnInit(): void {
  }

}
