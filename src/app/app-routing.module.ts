import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './vistas/cuerpo/inicio/inicio.component';
import { AboutComponent } from './vistas/cuerpo/about/about.component';
import { HeroesComponent } from './vistas/cuerpo/heroes/heroes.component';
import { DetalleheroeComponent } from './vistas/cuerpo/detalleheroe/detalleheroe.component';

const ROUTES: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"sobre",component:AboutComponent},
  {path:"heroes",component:HeroesComponent},
  {path:"detalleheroe/:id",component:DetalleheroeComponent},
  {path:"**",redirectTo:"inicio"}];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
