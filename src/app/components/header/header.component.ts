import { Component, Input, OnInit } from '@angular/core';
import { faHome, faMessage,faShoppingCart, faUsers, faReceipt,faChartLine, faWrench, faPlus, faSearch, faQuestionCircle, faCalculator, faClock, faBell, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input() username:any;
  faSearch = faSearch;
  faQuestionCircle = faQuestionCircle;
  faCalculator = faCalculator;
  faClock = faClock;
  faBell = faBell;

  constructor() { }

  username=localStorage.getItem("user")

  ngOnInit(): void {
  }

}
