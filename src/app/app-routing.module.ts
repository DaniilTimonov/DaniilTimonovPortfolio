import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/terran_units/heroes.component';
import { ZergUnitsComponent } from './components/zerg-units/zerg-units.component';
import { ProtossUnitsComponent } from './components/protoss-units/protoss-units.component';
import { AppComponent } from './app.component';
import { MaincenterComponent } from './components/maincenter/maincenter.component';


const routes: Routes = [
    {path:'', redirectTo: 'main', pathMatch:'full'},
    { path: 'main', component: MaincenterComponent},
    { path: 'terrans', component:HeroesComponent},
    { path: 'zergs', component:ZergUnitsComponent},
    { path: 'protosses', component:ProtossUnitsComponent},
  
  
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }