import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokemonNumberPipe } from './custom-pipes/pokemon-number.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeListComponent,
    PokeCardComponent,
    PokemonNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pokedex', component: PokeListComponent },
      { path: 'about', redirectTo: 'pokedex', pathMatch: 'full'},
      { path: '', redirectTo: 'pokedex', pathMatch: 'full'},
      { path: '**', redirectTo: 'pokedex', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
