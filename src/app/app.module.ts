import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutoCompleteAcessoAreaComponent } from './auto-complete-acesso-area/auto-complete-acesso-area.component';
import { AngularMaterialModule } from './angular-material.module';
import { AutoCompleteJogosBasicComponent } from './auto-complete-jogos-basic/auto-complete-jogos-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteAcessoAreaComponent,
    AutoCompleteJogosBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
