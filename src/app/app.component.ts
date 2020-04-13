import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal){
    
  }
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
  async deleteTodo(todo:any) {
    const modal = this.modalService.open(ConfirmationModalComponent);
    const componant: ConfirmationModalComponent = modal.componentInstance;
    componant.modalInstance= modal; 

    const result = await modal.result;
    
    if(result === 'yes'){
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
} 

}
