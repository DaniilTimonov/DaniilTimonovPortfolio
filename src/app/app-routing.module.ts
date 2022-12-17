import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraditionalArt } from './components/traditional_art/traditional_art.component';
import { DigitalGraphic } from './components/digital_graphic/digital_graphic.component';
import { DrawingOnCloth } from './components/drawing_on_cloth/drawing_on_cloth.component';
import { AppComponent } from './app.component';
import { MaincenterComponent } from './components/maincenter/maincenter.component';


const routes: Routes = [
    {path:'', redirectTo: 'main', pathMatch:'full'},
    { path: 'main', component: MaincenterComponent},
    { path: 'traditionalart', component:TraditionalArt},
    { path: 'digitalgraphic', component:DigitalGraphic},
    { path: 'clothdrawing', component:DrawingOnCloth},
  
  
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }