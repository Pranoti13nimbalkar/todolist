import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todos';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
   
})
export class TodosComponent implements OnInit {
count:number=0;
  onAddCount(){
    if(this.count <5){
       this.count++    
    }
  }
  onDeleteCount(){
 if(this.count >0){
       this.count--   
    }
  }


@ViewChild('TodoItem') todoItemRef! : ElementRef;

   todosArr: Array<Itodos>=[
    {
    todoItem:"Angular",
    todoId:"123"
   },
    {
    todoItem:"RxJs",
    todoId:"1234"
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }
onAddTodo(todoItemControl : HTMLInputElement){
  let todoObj:Itodos={
    todoItem: todoItemControl.value,
    todoId: this.uuid()
  }
  todoItemControl.value=''
  this.todosArr.unshift(todoObj)
}

uuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
};

onRemove(todoId:string){
  const isConfirm = confirm('Are you sure, you want to remove  from list ?');
  if(isConfirm){
 let REMOVE_ID = todoId;
  let GET_INDEX =this.todosArr.findIndex(todo=>todo.todoId=== REMOVE_ID);
  this.todosArr.splice(GET_INDEX,1)
  }
 
}
}
