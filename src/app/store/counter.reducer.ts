import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.action';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value)
);

// old way to create a reducer
// export function counterReducerLegacyMethod(state = initialState, action: any) {
//   if (action.type === '[Counter] Increment') {
//     return state + action.value;
//   }
//   return state;
// }
