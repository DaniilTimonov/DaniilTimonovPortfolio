import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/terran_units/heroes.component';
import { FormsModule } from '@angular/forms';
import { ZergUnitsComponent } from './components/zerg-units/zerg-units.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ZergUnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
