import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GelenlerComponent } from './components/gelenler/gelenler.component';
import { HizlisiparisComponent } from './components/hizlisiparis/hizlisiparis.component';
import { MusterilerComponent } from './components/musteriler/musteriler.component';
import { PerformansComponent } from './components/performans/performans.component';
import { SistemayarlariComponent } from './components/sistemayarlari/sistemayarlari.component';
import { UrunhavuzuComponent } from './components/urunhavuzu/urunhavuzu.component';
import { AliciComponent } from './pages/alici/alici.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaylaskazanComponent } from './pages/paylaskazan/paylaskazan.component';
import { SaticiComponent } from './pages/satici/satici.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:LoginComponent},
  {path:"alici",component:AliciComponent},
  {path:"satici",component:SaticiComponent},
  {path:"paylaskazan",component:PaylaskazanComponent},
  {path:"gelenler",component:GelenlerComponent},
  {path:"hizlisiparis",component:HizlisiparisComponent},
  {path:"musteriler",component:MusterilerComponent},
  {path:"urunhavuzu",component:UrunhavuzuComponent},
  {path:"sistemayarlari",component:SistemayarlariComponent},
  {path:"performans",component:PerformansComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
