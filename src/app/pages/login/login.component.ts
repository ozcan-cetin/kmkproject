import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

key:string="";
username:string=""
password:string="";
test:any;

// setStorage(username:string){
//   this.key='user'
//   this.localStore.saveData(this.key, username);
//   this.test=this.localStore.getData(this.key)
// }

// @Output() newItemEvent = new EventEmitter<string>();

// private localStore: LocalService
constructor(private router:Router) { }

setStorage(username:string){
this.key='user'
localStorage.setItem(this.key, username)
}  

redUser:any;
redPassword:any;
  goHome() {
    if(this.username && this.password){
      this.router.navigate(['home']);
      this.redUser=false
      this.redPassword=false
    }
    else if(!this.username && !this.password){
      // alert("Lütfen istenen bilgileri giriniz")
      this.redUser=true;
      this.redPassword=true;
    }
    else if(!this.username){
      // alert("Lütfen kullanıcı adını giriniz")
      this.redUser=true
      this.redPassword=false
    }
    else{
      this.redPassword=true
      this.redUser=false
    }
  }

  ngOnInit(): void {
  }

}
