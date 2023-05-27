import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mockData = mockData;
  // data: any = '123'
  addTodo(data: any) {
    console.log('Add todo', data);
  }
}

const mockData = [
  {
    id: 1,
    title: 'Learn Angular',
    completed: true
  },
  {
    id: 2,
    title: 'Learn React',
    completed: false
  },
]

