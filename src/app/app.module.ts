import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './vistas/cabecera/menu/menu.component';
import { PieComponent } from './vistas/piepagina/pie/pie.component';
import { InicioComponent } from './vistas/cuerpo/inicio/inicio.component';
import { AboutComponent } from './vistas/cuerpo/about/about.component';
import { HeroesComponent } from './vistas/cuerpo/heroes/heroes.component';
import { DetalleheroeComponent } from './vistas/cuerpo/detalleheroe/detalleheroe.component';
import { HeroesresumenComponent } from './vistas/cuerpo/heroesresumen/heroesresumen.component';
import { TempleheroeComponent } from './vistas/cuerpo/templeheroe/templeheroe.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    InicioComponent,
    AboutComponent,
    HeroesComponent,
    DetalleheroeComponent,
    HeroesresumenComponent,
    TempleheroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
