import { Component, OnInit } from '@angular/core';

//Importamos Observable porque de este tipo de dato va a ser la variable con la que mostramos el count
import { Observable } from "rxjs"

//Importamos el store desde ngrx
import { Store } from "@ngrx/store"

//Importamos nuestas acciones
import { increment, decrement, reset } from "src/app/store/actions/counter.actions"

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>

  //inyectamos el store en el constructor
  constructor(private store: Store<{ count: number }>) {

    this.count$ = store.select("count");

  }

  ngOnInit(): void {
  }

  // Creamos los metodos que van a despachar las acciones que importamos
  increment() {

    this.store.dispatch(increment())

  }

  decrement() {

    this.store.dispatch(decrement())

  }

  reset() {

    this.store.dispatch(reset());

  }

}
