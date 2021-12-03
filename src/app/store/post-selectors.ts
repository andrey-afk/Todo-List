import { createSelector } from '@ngrx/store';
import {State} from "./post-reducer";


export interface AppState {
  posts: State;
}

export const selectState = (state: AppState) => {
  return  state.posts
};

export const selectAllPosts = createSelector(
  selectState,
  (state: State) => {
   return state?.posts
  }
);
