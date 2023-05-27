import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() todoValue: any = null;
  @Output() emitValue = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  valueTodoChange(data: any) {
    this.emitValue.emit(data)
  }

}
