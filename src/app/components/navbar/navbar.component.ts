import { Component, OnInit } from '@angular/core';
import { faHome, faMessage,faShoppingCart, faUsers, faReceipt,faChartLine, faWrench, faPlus, faSearch, faQuestionCircle, faCalculator, faClock, faBell, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
