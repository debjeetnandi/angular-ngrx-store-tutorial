import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { tasteReducer } from './taste.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyTasteComponent } from './my-taste/my-taste.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
      taste: tasteReducer,
    }),
  ],
  declarations: [AppComponent, MyCounterComponent, MyTasteComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
