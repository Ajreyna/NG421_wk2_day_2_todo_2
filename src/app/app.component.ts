import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 0;

  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', description: 'this is a description', id: 0, isDone: false },
    
    ];
  }
  addTodo():void { 
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      isDone: false,
      description: ''
    });
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

}
