import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SaticiComponent } from './pages/satici/satici.component';
import { AliciComponent } from './pages/alici/alici.component';
import { PaylaskazanComponent } from './pages/paylaskazan/paylaskazan.component';
import { HeaderComponent } from './components/header/header.component';
import { GelenlerComponent } from './components/gelenler/gelenler.component';
import { HizlisiparisComponent } from './components/hizlisiparis/hizlisiparis.component';
import { MusterilerComponent } from './components/musteriler/musteriler.component';
import { UrunhavuzuComponent } from './components/urunhavuzu/urunhavuzu.component';
import { PerformansComponent } from './components/performans/performans.component';
import { SistemayarlariComponent } from './components/sistemayarlari/sistemayarlari.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SaticiComponent,
    AliciComponent,
    PaylaskazanComponent,
    HeaderComponent,
    GelenlerComponent,
    HizlisiparisComponent,
    MusterilerComponent,
    UrunhavuzuComponent,
    PerformansComponent,
    SistemayarlariComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
