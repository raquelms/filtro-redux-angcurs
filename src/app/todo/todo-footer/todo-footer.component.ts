import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.action';
import * as fromtodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducer';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFilter.filtrosvalidos[] = ['todos','completados','pendientes'];
  filtroActual: fromFilter.filtrosvalidos;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.contarPendientes(state.todos);
      this.filtroActual=state.filtros;
    })
  }

  cambiarFiltro(nuevoFiltro: fromFilter.filtrosvalidos){
    const accion = new fromFilter.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]){
    this.pendientes= todos.filter(todo=>!todo.estado).length;
  }

  borrartodo(){
    const accion = new fromtodo.BorrarAllTodoAction;
    this.store.dispatch(accion);
  }

}
