import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

 txtInput: FormControl;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo(){
    if(this.txtInput.invalid){
      return
    }
    const accion = new fromTodo.AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(accion);

    this.txtInput.setValue('');

    // console.log(this.txtInput.value);
    // console.log(this.txtInput.valid);
  }

}
