import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducer';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {
  
  todos: Todo[]=[];
  filtro: string;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.todos=state.todos;
      this.filtro=state.filtros;
    })
  }

}
