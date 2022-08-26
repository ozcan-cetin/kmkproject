import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Input() setStorage:any


  // key: string ="user";
  // public myItem: any;
  // setStorage(name:string) {
  //   localStorage.clear();
  //   localStorage.setItem(this.key, name);
  //   this.myItem=localStorage.getItem(this.key)
  //   this.key='';
  // }

key:string="";
username:string=""
password:any;

setStorage(username:string){
  this.key='user'
  this.localStore.saveData(this.key, username);
}

  constructor(private router:Router,
    private localStore: LocalService) { }

  goHome() {
    if(this.username && this.password)
    this.router.navigate(['']);
    else{
      alert("Lütfen bilgileri giriniz")
    }
  }

  ngOnInit(): void {
  }

  // eventMessage(message:string){
  //   alert(message)
  // }
  style:boolean=true
  eventMessage():void{
    // if(this.username)
    }
  // (blur)='!username && eventMessage("Lütfen kullanıcı adını giriniz")'


}
