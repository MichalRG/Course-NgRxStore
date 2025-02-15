import { createReducer } from '@ngrx/store';

const initialState = 0;

export const counterReducer = createReducer(initialState);

// old way to create a reducer
// export function counterReducerLegacyMethod(state = initialState) {
//   return state;
// }
