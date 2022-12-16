import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/terran_units/heroes.component';
import { FormsModule } from '@angular/forms';
import { ZergUnitsComponent } from './components/zerg-units/zerg-units.component';
import { ProtossUnitsComponent } from './components/protoss-units/protoss-units.component';
import { HeaderComponent } from './components/interfaceelements/header/header.component';
import { FooterComponent } from './components/interfaceelements/footer/footer.component';
import { NavigationburgerComponent } from './components/navigationburger/navigationburger.component';
import { MaincenterComponent } from './components/maincenter/maincenter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ZergUnitsComponent,
    ProtossUnitsComponent,
    HeaderComponent,
    FooterComponent,
    NavigationburgerComponent,
    MaincenterComponent
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
