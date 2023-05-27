import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() todoData: any = null
  @Output() sendSubmit = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.sendSubmit.emit(data)
  }

}
