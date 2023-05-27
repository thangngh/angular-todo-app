import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() submit = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    this.submit.emit(event)
  }
}
