import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { PlayComponent } from './pages/play/play.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { HttpClientModule } from "@angular/common/http";
import { PreguntaComponent } from './pages/pregunta/pregunta.component';
import { NivelComponent } from './pages/nivel/nivel.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { FinalComponent } from './pages/final/final.component';
import { JugarComponent } from './pages/admin/jugar/jugar.component';
import { JugandoComponent } from './pages/client/jugando/jugando.component';
import { VideogameComponent } from './pages/client/videogame/videogame.component';
import { UnirmeComponent } from './pages/client/unirme/unirme.component';
import { EquipoComponent } from './pages/client/equipo/equipo.component';
import { ComienzajuegoComponent } from './pages/client/comienzajuego/comienzajuego.component';
import { PreplayComponent } from './client/preplay/preplay.component';
import { RankComponent } from './cliente/rank/rank.component';
import { FinaljuegoComponent } from './cliente/finaljuego/finaljuego.component';
import { EstadisticasComponent } from './cliente/estadisticas/estadisticas.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { WindowComponent } from './components/window/window.component';
import { NavantesComponent } from './shared/navantes/navantes.component';
import { NavuserComponent } from './shared/navuser/navuser.component';
import { NavadminComponent } from './shared/navadmin/navadmin.component';
import { PerfilComponent } from './pages/client/perfil/perfil.component';
import { HistorialComponent } from './pages/client/historial/historial.component';
import { BibliotecaComponent } from './pages/client/biblioteca/biblioteca.component';
import { EditarPerfilComponent } from './pages/client/editar-perfil/editar-perfil.component';
import { ImagenesComponent } from './pages/client/imagenes/imagenes.component';
import { RecuperarComponent } from './auth/recuperar/recuperar.component';
import { CodigoComponent } from './auth/codigo/codigo.component';
import { RestaurarComponent } from './auth/restaurar/restaurar.component';
import { NavjuegoComponent } from './shared/navjuego/navjuego.component';
import { InicioComponent } from './pages/admin/inicio/inicio.component';
import { EstadisticasGeneralesComponent } from './pages/admin/estadisticas-generales/estadisticas-generales.component';
import { PerfilesComponent } from './pages/admin/perfiles/perfiles.component';
import { PerfilAdminComponent } from './pages/admin/perfil-admin/perfil-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    PlayComponent,
    AvatarComponent,
    PreguntaComponent,
    NivelComponent,
    JuegoComponent,
    FinalComponent,
    JugarComponent,
    JugandoComponent,
    VideogameComponent,
    UnirmeComponent,
    EquipoComponent,
    ComienzajuegoComponent,
    PreplayComponent,
    RankComponent,
    FinaljuegoComponent,
    EstadisticasComponent,
    LoginComponent,
    RegistroComponent,
    WelcomeComponent,
    WindowComponent,
    NavantesComponent,
    NavuserComponent,
    NavadminComponent,
    PerfilComponent,
    HistorialComponent,
    BibliotecaComponent,
    EditarPerfilComponent,
    ImagenesComponent,
    RecuperarComponent,
    CodigoComponent,
    RestaurarComponent,
    NavjuegoComponent,
    InicioComponent,
    EstadisticasGeneralesComponent,
    PerfilesComponent,
    PerfilAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
