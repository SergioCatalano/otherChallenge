import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasjsComponent } from './pruebasjs/pruebasjs.component';
import { Reto03Component } from './reto03/reto03.component';
import { Reto04Component } from './reto04/reto04.component';
import { Reto05Component } from './reto05/reto05.component';
import { Reto06Component } from './reto06/reto06.component';
import { Reto07Component } from './reto07/reto07.component';
import { Reto08Component } from './reto08/reto08.component';
import { Reto09Component } from './reto09/reto09.component';
import { Reto10Component } from './reto10/reto10.component';
import { Reto11Component } from './reto11/reto11.component';
import { Reto12Component } from './reto12/reto12.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebasjsComponent,
    Reto03Component,
    Reto04Component,
    Reto05Component,
    Reto06Component,
    Reto07Component,
    Reto08Component,
    Reto09Component,
    Reto10Component,
    Reto11Component,
    Reto12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
