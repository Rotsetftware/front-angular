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
import { WindowComponent } from './components/window/window.component';
import { TokenGuard } from './guards/token.guard';
import { PerfilComponent } from './pages/client/perfil/perfil.component';
import { HistorialComponent } from './pages/client/historial/historial.component';
import { BibliotecaComponent } from './pages/client/biblioteca/biblioteca.component';
import { EditarPerfilComponent } from './pages/client/editar-perfil/editar-perfil.component';
import { ImagenesComponent } from './pages/client/imagenes/imagenes.component';
import { RecuperarComponent } from './auth/recuperar/recuperar.component';
import { CodigoComponent } from './auth/codigo/codigo.component';
import { RestaurarComponent } from './auth/restaurar/restaurar.component';
import { InicioComponent } from './pages/admin/inicio/inicio.component';
import { EstadisticasGeneralesComponent } from './pages/admin/estadisticas-generales/estadisticas-generales.component';
import { PerfilesComponent } from './pages/admin/perfiles/perfiles.component';
import { PerfilAdminComponent } from './pages/admin/perfil-admin/perfil-admin.component';
import { FormPerfilComponent } from './pages/admin/form-perfil/form-perfil.component';

const routes: Routes = [
  {
    path: 'form-perfil/:id',
    component: FormPerfilComponent
  },
  {
    path: 'perfil-admin',
    component: PerfilAdminComponent
  },
  {
    path: 'perfiles',
    component: PerfilesComponent
  },
  {
    path: 'estadisticas-generales',
    component: EstadisticasGeneralesComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'restaurar',
    component: RestaurarComponent
  },
  {
    path: 'codigo',
    component: CodigoComponent
  },
  {
    path: 'recuperar',
    component: RecuperarComponent
  },
  {
    path: 'imagenes',
    component: ImagenesComponent
  },
  {
    path: 'editar-perfil',
    component: EditarPerfilComponent
  },
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  },
  {
    path: 'historial',
    component: HistorialComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'windows',
    component: WindowComponent
  },
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
    component: HomeComponent,
    canActivate: [TokenGuard]
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
