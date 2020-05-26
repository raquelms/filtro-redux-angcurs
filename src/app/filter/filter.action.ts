import { Action } from '@ngrx/store';

    export const SET_FILTRO = '[FILTER] Set Filtro';
    export type filtrosvalidos ='todos'| 'completados' | 'pendientes';

export class SetFiltroAction implements Action{
    readonly type=SET_FILTRO;
    constructor(public filtros: filtrosvalidos ){}
}

export type acciones = SetFiltroAction;