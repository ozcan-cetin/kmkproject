import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
