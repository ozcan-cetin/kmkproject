import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './components/test/test.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SaticiComponent } from './pages/satici/satici.component';
import { AliciComponent } from './pages/alici/alici.component';
import { PaylaskazanComponent } from './pages/paylaskazan/paylaskazan.component';
import { HeaderComponent } from './components/header/header.component';
import { IletilerComponent } from './components/iletiler/iletiler.component';
import { SiparislerComponent } from './components/siparisler/siparisler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    TestComponent,
    SaticiComponent,
    AliciComponent,
    PaylaskazanComponent,
    HeaderComponent,
    IletilerComponent,
    SiparislerComponent
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
