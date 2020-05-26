import * as fromFilter from './filter.action';


const estadoInicial: fromFilter.filtrosvalidos = 'todos';


export function filterReducer(state=estadoInicial, action: fromFilter.acciones){
    switch(action.type){
        case fromFilter.SET_FILTRO:
            return action.filtros;

        default:
            return state;
    }
}