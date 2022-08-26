import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kmkproject';

  key: string ="";
  public myItem: any;
  storeName(name:string) {
    localStorage.setItem(this.key, name);
    this.myItem=localStorage.getItem(this.key)
    this.key='';
  }

  // getStore(){
  // }

  count:number=0

  increase(){
    this.count+=1
  }
  deccrease(){
    if(this.count>0){

      this.count-=1
    }
  }
}
