import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './pages/room/room.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { NivelComponent } from './pages/nivel/nivel.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { PreguntaComponent } from './pages/pregunta/pregunta.component';
import { FinalComponent } from './pages/final/final.component';
import { JugarComponent } from './pages/admin/jugar/jugar.component';
import { JugandoComponent } from './pages/client/jugando/jugando.component';
import { UnirmeComponent } from './pages/client/unirme/unirme.component';
import { EquipoComponent } from './pages/client/equipo/equipo.component';
import { ComienzajuegoComponent } from './pages/client/comienzajuego/comienzajuego.component';
import { VideogameComponent } from './pages/client/videogame/videogame.component';
import { EstadisticasComponent } from './cliente/estadisticas/estadisticas.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sala/:room',
    component: RoomComponent
  },
  {
    path: 'avatar',
    component: AvatarComponent
  },
  {
    path: 'niveles',
    component: NivelComponent
  },
  {
    path: 'juegos/:id',
    component: JuegoComponent
  },
  {
    path: 'kahoot/:id',
    component: PreguntaComponent
  },
  {
    path: 'final',
    component: FinalComponent
  },
  {
    path: 'jugar/:room',
    component: VideogameComponent
  },
  {
    path: 'jugando/:room',
    component: JugandoComponent
  },
  {
    path: 'unirme',
    component: UnirmeComponent
  },
  {
    path: 'equipo',
    component: EquipoComponent
  },
  {
    path: 'comienzajuego',
    component: ComienzajuegoComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
