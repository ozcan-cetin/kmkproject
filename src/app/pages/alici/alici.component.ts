import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faMessage,faShoppingCart, faUsers, faReceipt,faChartLine, faWrench, faPlus, faSearch, faQuestionCircle, faCalculator, faClock, faBell, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'alici',
  templateUrl: './alici.component.html',
  styleUrls: ['./alici.component.scss']
})
export class AliciComponent implements OnInit {
  faHome = faHome;
  faMessage = faMessage;
  faShoppingCart = faShoppingCart;
  faUsers = faUsers;
  faReceipt = faReceipt;
  faChartLine = faChartLine;
  faWrench = faWrench;
  faPlus = faPlus;
  faSearch = faSearch;
  faQuestionCircle = faQuestionCircle;
  faCalculator = faCalculator;
  faClock = faClock;
  faBell = faBell;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  total=[
    {iletiler:["Gelenler", 'Gidenler', "Sohbet", "Çöp Kutusu"]},
    {siparisler:["Tekrarlayan siparişler", 'İptal siparişlerim', "İade işlemlerim", "Cari işlemlerim",'Değerlendirmelerim']},
    {takip:["Takip ettiğim ürünler", 'T.E. Kategoriler', "T.E. Markalar", "T.E. Satıcılar"]},
    {listem:["Alışveriş listem"]},
    {kampanyalar:["Bana özel kampanyalar", 'Kuponlarım']},
    {hesap:["Hesap bilgileri", 'Fatura ayarları', "Adreslerim", "Hesap tanımları"]},
  ]
  
  s1:boolean=true
  s2:boolean=true
  s3:boolean=true
  s4:boolean=true
  s5:boolean=true
  s6:boolean=true
  
  
  opengenel(){
    this.s3=true
    this.s1= true, this.s2= true, this.s4= true, this.s5 = true,this.s6=true
  }
  openIletiler(){
    this.s1=true
    this.s2= false, this.s3= false, this.s4= false, this.s5 = false,this.s6=false
  }
  
  opensiparis(){
    this.s2=true
    this.s1= false, this.s3= false, this.s4= false, this.s5 = false,this.s6=false
  }
  openkatalog(){
    this.s3=true
    this.s1= false, this.s2= false, this.s4= false, this.s5 = false,this.s6=false
  }
  openmusteri(){
    this.s4=true
    this.s1= false, this.s2= false, this.s3= false, this.s5 = false,this.s6=false
  }
  openpazarlama(){
    this.s5=true
    this.s1= false, this.s2= false, this.s4= false, this.s3 = false, this.s6=false
  }
  openayarlar(){
    this.s6=true
    this.s1= false, this.s2= false, this.s3= false, this.s4= false, this.s5 = false
  }

  //!routing
  goSatici(){
    this.router.navigate(['satici'])
  }
}
