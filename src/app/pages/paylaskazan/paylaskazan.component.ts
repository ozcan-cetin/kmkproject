import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faMessage,faShoppingCart, faUsers, faReceipt,faChartLine, faWrench, faPlus, faSearch, faQuestionCircle, faCalculator, faClock, faBell, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'paylaskazan',
  templateUrl: './paylaskazan.component.html',
  styleUrls: ['./paylaskazan.component.scss']
})
export class PaylaskazanComponent implements OnInit {
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
    {kartlar:["Ürünler", 'Kampanyalar', "Kuponlar", "Postlar", "Bültenler", "Link"]},
    {paylasimlar:["Paylaşımlar", 'İşlem gören paylaşımlar', "Paylaş"]},
    {muhasebe:["Hesap Hareketleri"]},
    {listem:["Toplu içe aktar", "Toplu dışa aktar"]},
    {hesap:["Hesap bilgileri", 'Ödeme bilgileri', "Sosyal medya bağlantı", "Siteme ekle"]},
  ]
  
  s1:boolean=true
  s2:boolean=true
  s3:boolean=true
  s4:boolean=true
  s5:boolean=true
  
  
  opengenel(){
    this.s3=true
    this.s1= true, this.s2= true, this.s4= true, this.s5 = true
  }
  openIletiler(){
    this.s1=true
    this.s2= false, this.s3= false, this.s4= false, this.s5 = false
  }
  
  opensiparis(){
    this.s2=true
    this.s1= false, this.s3= false, this.s4= false, this.s5 = false
  }
  openkatalog(){
    this.s3=true
    this.s1= false, this.s2= false, this.s4= false, this.s5 = false
  }
  openlistem(){
    this.s4=true
    this.s1= false, this.s2= false, this.s3= false, this.s5 = false
  }
  openhesap(){
    this.s5=true
    this.s1= false, this.s2= false, this.s4= false, this.s3 = false
  }
}
