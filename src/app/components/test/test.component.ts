import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  ngOnInit(): void {
  }

}
