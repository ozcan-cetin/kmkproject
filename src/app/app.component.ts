import { Component } from '@angular/core';
import { LocalService } from './services/local.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kmkproject';
  faStar=faStar;

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    // this.items.push(newItem);
    this.username=newItem
  }

constructor(private localStore: LocalService) { }

  key:string="";
  username:string=""
  password:any;
  
  public setStorage(username:string){
    this.key='user'
    this.localStore.saveData(this.key, username);
  }


}
