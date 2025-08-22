import { MaterialDemo } from './components/material-demo/material-demo';
import { Component, signal } from '@angular/core';
import { UnittestingDemo } from './components/unittesting-demo/unittesting-demo';
import { Counter } from './components/counter/counter';
import { TodoCrud } from './components/todo-crud/todo-crud';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemo,
    // UnittestingDemo
    // Counter
    TodoCrud
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_june_2025_angular_project_2');
}
