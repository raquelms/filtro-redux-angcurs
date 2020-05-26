import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

import * as fromFiltro from './filter.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtrosvalidos): Todo[] {
    
    switch(filtro){
      case 'completados':
        return todos.filter(todo=> todo.estado);
      
      case 'pendientes':
        return todos.filter(todo=> !todo.estado);

      default:
        return todos;
    }

  }

}
