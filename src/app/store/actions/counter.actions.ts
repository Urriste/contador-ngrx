//Importamos createAction desde ngrx
import { createAction } from "@ngrx/store";


//Creamos y exportamos las constantes que contienen las instancias de las acciones

//Dentro de estas acciones, se acepta otro parametro, que son las props (El payload en Redux)
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
