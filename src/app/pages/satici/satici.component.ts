import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faMessage,faShoppingCart, faUsers, faReceipt,faChartLine, faWrench, faPlus, faSearch, faQuestionCircle, faCalculator, faClock, faBell, } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'satici',
  templateUrl: './satici.component.html',
  styleUrls: ['./satici.component.scss']
})
export class SaticiComponent implements OnInit {
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
  {iletiler:["Gelenler", 'Gidenler', "Şablonlar", "Çöp Kutusu"]},
  {siparisler:["Hızlı sipariş", 'Siparişler', "Terkrarlayan siparişler", "Teklifler",'Rezervasyonlar', 'İptal siparişler', 'İade işlemleri','Hesap işlemleri']},
  {katalog:["Satışta olan ürünler", 'Onay bekleyen ürünler', "Ürün havuzu", "Toplu içe aktarma",'Toplu dışa aktarma']},
  {musteriler:["Müşteriler"]},
  {pazarlama:["Performans", 'Reklam ver', "Değerlendirmeler", "Terkedilen sepetler",'Kampanyalar', 'Fırsat indirimleri', 'Kuponlar','İçerik pazarlama', 'Bildirim pazarlama','Paylaş kazan','SEO optimizasyon','Sosyal medya pazarlama']},
  {ayarlar:["Hesap ayarları", 'Satıcı ayarları', "Ekip yönetimi", "Ödeme ayarları",'Teslimat ayarları', 'Global satış', 'Servisler','Tarihçe']},
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
  }


