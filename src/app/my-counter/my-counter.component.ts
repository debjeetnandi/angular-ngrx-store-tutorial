import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    //TODO: Connect this.count$ stream to current store count object
    this.count$ = store.select('count');
  }

  increment() {
    //TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    //TODO: Dispatch an decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    //TODO: Dispatch an reset action
    this.store.dispatch(reset());
  }
}
