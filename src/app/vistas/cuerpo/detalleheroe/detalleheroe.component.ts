import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleheroe',
  templateUrl: './detalleheroe.component.html',
  styles: [
  ]
})
export class DetalleheroeComponent implements OnInit {

  public heroe;

  constructor(private heroesPrd: HeroesService, private routerPrd: ActivatedRoute) { }

  ngOnInit(): void {

    this.routerPrd.params.subscribe(parametros => {
      this.heroe = this.heroesPrd.getHeroe(parametros["id"]);
      console.log(this.heroe);
    });


  }

}
