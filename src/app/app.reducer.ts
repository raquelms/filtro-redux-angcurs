import {Todo} from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromFiltroAction from './filter/filter.action';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';

export interface Appstate{
    todos: Todo[];
    filtros: fromFiltroAction.filtrosvalidos;
}

export const AppReducers: ActionReducerMap<Appstate>={
    todos: fromTodo.todoReducer,
    filtros: fromFilter.filterReducer
}