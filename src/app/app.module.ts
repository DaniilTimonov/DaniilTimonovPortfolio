import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarModule } from 'ng-sidebar'; /* for mobile slider */


import { CarouselModule } from 'primeng/carousel';
import { StyleClassModule } from 'primeng/styleclass';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { TraditionalArt } from './components/traditional_art/traditional_art.component';
import { FormsModule } from '@angular/forms';
import { DigitalGraphic } from './components/digital_graphic/digital_graphic.component';
import { DrawingOnCloth } from './components/drawing_on_cloth/drawing_on_cloth.component';
import { HeaderComponent } from './components/interfaceelements/header/header.component';
import { FooterComponent } from './components/interfaceelements/footer/footer.component';
import { NavigationburgerComponent } from './components/navigationburger/navigationburger.component';
import { MaincenterComponent } from './components/maincenter/maincenter.component';
import { FreelanceArtComponent } from './components/freelance-art/freelance-art.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavouritepicturessliderComponent } from './components/favouritepicturesslider/favouritepicturesslider.component';
import { HeadersliderComponent } from './components/interfaceelements/headerslider/headerslider.component';
import { TraditionalartsliderComponent } from './components/interfaceelements/traditionalartslider/traditionalartslider.component';
import { DigitalgraphicsliderComponent } from './components/interfaceelements/digitalgraphicslider/digitalgraphicslider.component';
import { DrawingonclothsliderComponent } from './components/interfaceelements/drawingonclothslider/drawingonclothslider.component';
import { FreelanceartsliderComponent } from './components/interfaceelements/freelanceartslider/freelanceartslider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MobilenavigationsliderComponent } from './components/interfaceelements/mobilenavigationslider/mobilenavigationslider.component';



@NgModule({
  declarations: [
    AppComponent,
    TraditionalArt,
    DigitalGraphic,
    DrawingOnCloth,
    HeaderComponent,
    FooterComponent,
    NavigationburgerComponent,
    MaincenterComponent,
    FreelanceArtComponent,
    ContactsComponent,
    FavouritepicturessliderComponent,
    HeadersliderComponent,
    TraditionalartsliderComponent,
    DigitalgraphicsliderComponent,
    DrawingonclothsliderComponent,
    FreelanceartsliderComponent,
    MobilenavigationsliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
		StyleClassModule,
		BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
