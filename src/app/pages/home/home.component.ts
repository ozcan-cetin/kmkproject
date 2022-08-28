import { Component, Input, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@Input() username:any;

  key:string="";
  constructor(private localStore: LocalService) { }

  ngOnInit():void{
  }
}
