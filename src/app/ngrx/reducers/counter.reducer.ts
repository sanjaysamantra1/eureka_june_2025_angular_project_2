import { decrement, increment, reset } from '../actions/counter.actions';
import { createReducer, on } from "@ngrx/store";

const InitialState = 0;
export const counterReducer = createReducer(
  InitialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
)
