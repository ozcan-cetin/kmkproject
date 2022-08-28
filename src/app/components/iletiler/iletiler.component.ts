import { Component, OnInit } from '@angular/core';
import { faHome, faMessage,faShoppingCart, faUsers, faReceipt,faChartLine, faWrench, faPlus, faSearch, faQuestionCircle, faCalculator, faClock, faBell, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'iletiler',
  templateUrl: './iletiler.component.html',
  styleUrls: ['./iletiler.component.scss']
})
export class IletilerComponent implements OnInit {

  constructor() { }
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

  total=[
    {iletiler:['İLETİLER', "Gelenler", 'Gidenler', "Şablonlar", "Çöp Kutusu"]},
    {siparisler:['SİPARİŞLER', "Hızlı sipariş", 'Siparişler', "Terkrarlayan siparişler", "Teklifler",'Rezervasyonlar', 'İptal siparişler', 'İade işlemleri','Hesap işlemleri']},
    {katalog:['KATALOG', "Satışta olan ürünler", 'Onay bekleyen ürünler', "Ürün havuzu", "Toplu içe aktarma",'Toplu dışa aktarma']},
    {musteriler:['MÜŞTERİLER', "Müşteriler"]},
    {pazarlama:['PAZARLAMA', "Performans", 'Reklam ver', "Değerlendirmeler", "Terkedilen sepetler",'Kampanyalar', 'Fırsat indirimleri', 'Kuponlar','İçerik pazarlama', 'Bildirim pazarlama','Paylaş kazan','SEO optimizasyon','Sosyal medya pazarlama']},
  ]

  ngOnInit(): void {
  }
  test(name:any){
    return name
}

}
