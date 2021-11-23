//Imports desde ngrx
import { createAction, createReducer, on } from "@ngrx/store";

//Importamos nuestras acciones
import { increment, decrement, reset } from "../actions/counter.actions"


//Inicializamos un state inicial
export const initialState: number = 0;


//Creamos el reducer
//Como primer parámetro, pasamos el state inicial. Luego, agregamos nuestras acciones, seguidas de las funciones que van a crear el nuevo state
const _counterReducer = createReducer(initialState,

    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)

);

//Exportamos una funcion que contiene nuestro reducer
export const counterReducer = (state: any, action: any) => {
    return _counterReducer(state, action)
}