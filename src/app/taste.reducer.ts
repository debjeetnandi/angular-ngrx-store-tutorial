import { createReducer, on } from '@ngrx/store';
import { changeTaste, revertTaste } from './taste.actions';

export const initialTaste = 'I prefer the very stateless apps';

const _tasteReducer = createReducer(
  initialTaste,
  on(changeTaste, (state) => 'I prefer stateful apps'),
  on(revertTaste, (state) => 'Back to stateless again')
);

export function tasteReducer(state, action) {
  return _tasteReducer(state, action);
}
