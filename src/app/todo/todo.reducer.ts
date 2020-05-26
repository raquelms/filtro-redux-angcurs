import { Todo } from "./model/todo.model";
import * as fromTodo from './todo.actions';

const todo1 = new Todo('Escuchar Musica');
const todo2 = new Todo('Leer mas');
const todo3 = new Todo('cancion');

todo2.estado=true;

const stateInicial : Todo[] = [todo1, todo2, todo3];

export function todoReducer (state=stateInicial, action: fromTodo.Acciones):Todo[]{
    switch(action.type){

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto)
            return [...state, todo];
        
        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit=>{
                if(todoEdit.id === action.id){
                    return{
                        ...todoEdit,
                        estado: !todoEdit.estado
                    };
                }else{
                    return todoEdit
                }
            });

        case fromTodo.EDITAR_TODO:
            return state.map(editarTodo=>{
                if(editarTodo.id === action.id)
                {
                return {
                        ...editarTodo,
                        texto: action.texto 
                    }
                }else{
                    return editarTodo
                }
            });

        case fromTodo.TOGGLE_ALL_TODO:
            return state.map(statetodo=>{
                return{
                    ...statetodo,
                    estado: action.completado
                }
            })
        
        case fromTodo.BORRAR_TODO:
            return state.filter(statetodo=> statetodo.id !== action.id); 
        
        case fromTodo.BORRAR_ALL_TODO:
            return state.filter(statetodo=> !statetodo.estado);
             
        default:
            return state;
    }
}