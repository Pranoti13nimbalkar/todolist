import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todos';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
   
})
export class TodosComponent implements OnInit {



@ViewChild('TodoItem') todoItem! : ElementRef;

   todosArr: Array<Itodos>=[
    {
    todoItem:"Angular",
    todoId:"123",
  
   },
    {
    todoItem:"RxJs",
    todoId:"1234"
   }
  ]
  isInEditMode:boolean=false
  editId!:string
  constructor(private _snackbar : MatSnackBar) {}

  ngOnInit(): void {
  }

  openSnackbar(){
      
  }

onAddTodo(todoItemControl : HTMLInputElement){
  if(this.todoItem.nativeElement.value.length>0){
   let todoObj:Itodos={
    todoItem: todoItemControl.value,
    todoId: this.uuid()
  }
  todoItemControl.value=''
  this.todosArr.unshift(todoObj)

   this._snackbar.open(`The todo Item Add successfully` , "close" ,{
    horizontalPosition:'center',
    verticalPosition:'top',
    duration:2000
  })
  }
  
}

onEdit(todo:Itodos){
  this.editId=todo.todoId
  this.todoItem.nativeElement.value = todo.todoItem
this.isInEditMode=true
 

}

onUpdate(){
  let UPDATED_OBJ : Itodos={
       todoItem:this.todoItem.nativeElement.value,
       todoId:this.editId
  }
this.todoItem.nativeElement.value=''
let GET_INDEX=this.todosArr.findIndex(t=>t.todoId === this.editId)
this.todosArr[GET_INDEX]=UPDATED_OBJ
this.isInEditMode= false

  this._snackbar.open(`The todo Item Updated successfully` , "close" ,{
    horizontalPosition:'center',
    verticalPosition:'top',
    duration:2000
  })
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
  let GET_INDEX =this.todosArr.findIndex(todo=>todo.todoId=== todoId);
  this.todosArr.splice(GET_INDEX,1)
     this._snackbar.open(`The todo with id ${todoId} removed successfully` , "close" ,{
    horizontalPosition:'center',
    verticalPosition:'top',
    duration:2000
  })
  
}


}
