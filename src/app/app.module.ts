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
    WelcomeComponent
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
