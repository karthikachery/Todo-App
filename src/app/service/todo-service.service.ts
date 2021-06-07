import { Injectable } from '@angular/core';
import{of} from 'rxjs';
import {Todo} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos:Todo[];
  constructor() { 
    this.todos =[
      {
        id: '111',
        title: "Learn C++",
        isCompleted: true,
        date : new Date(),
      },
      {
        id: '222',
        title: "Learn Python",
        isCompleted: true,
        date : new Date(),
      },
      {
        id: '111',
        title: "Learn Angular",
        isCompleted: false,
        date : new Date(),
      }

    ];
  }

  getTodos(){
    return of(this.todos);
  }

  addTodos(todo:Todo){
    this.todos.push(todo);
  }

  changeStatus(todo:Todo){
     this.todos.map(singleTodo =>{
      if(singleTodo.id==todo.id){
        todo.isCompleted=!todo.isCompleted;
    }});
  }


  deleteTodo(todo:Todo){
    const indexOfTodo= this.todos.findIndex(
      (currentObj) => currentObj.id===todo.id,
      
    );

    this.todos.splice(indexOfTodo,1);
  }
}
