import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { changeTaste, revertTaste } from '../taste.actions';

@Component({
  selector: 'app-my-taste',
  templateUrl: './my-taste.component.html',
})
export class MyTasteComponent {
  tasteMsg$: Observable<string>;

  constructor(private store: Store<{ taste: string }>) {
    //TODO: Connect this.count$ stream to current store count object
    this.tasteMsg$ = store.select('taste');
  }

  onChangeTasteClick(): void {
    this.store.dispatch(changeTaste());
  }

  onRevertTasteClick(): void {
    this.store.dispatch(revertTaste());
  }
}
