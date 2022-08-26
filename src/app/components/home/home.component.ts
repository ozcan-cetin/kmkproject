import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  key:string="";
  username:any
  constructor(private localStore: LocalService) { }

  ngOnInit():void{
   this.username=this.localStore.getData(this.key)
   
  }
  

}
// public getData(key: string):void{
//   // console.log(localStorage.getItem(key))
//   this.username=localStorage.getItem(key)
//   // console.log(this.username)
// }