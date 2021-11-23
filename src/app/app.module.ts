import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Importamos el StoreModule y el CounterReducer
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],

  //Agregamos el StoreModule.forRoot que importa un objeto en nuestro
  //app.module con todos los reducers
  imports: [
    BrowserModule, StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
