import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwitchComponent } from './switch/switch.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { FlockingComponent } from './juvjersey/flocking/flocking.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { JuvjerseyComponent } from './juvjersey/juvjersey.component';
import { AjaxComponent } from './ajax/ajax.component';
import { AjaxPostComponent } from './ajax-post/ajax-post.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarousselComponent,
    KeyboardComponent,
    PlayersComponent,
    PlayerComponent,
    PlayerFormComponent,
    FlockingComponent,
    AjaxComponent,
    AjaxPostComponent;
    JuvjerseyComponent

  ],
  imports: [
    BrowserModule,
    JuvjerseyModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
