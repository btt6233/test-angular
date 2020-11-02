import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwitchComponent } from './switch/switch.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarousselComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
