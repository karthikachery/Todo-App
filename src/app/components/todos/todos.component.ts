import { Component, Input, OnInit } from '@angular/core';
import {TodoServiceService } from 'src/app/service/todo-service.service';
import {Todo} from '../../model/model';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() iconName :string
  faTrashAlt=faTrashAlt;
  
  todos:Todo[];
  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todos:Todo){
    this.todoService.changeStatus(todos);
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
}
